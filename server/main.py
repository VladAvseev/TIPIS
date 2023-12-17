from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
from fastapi.middleware.cors import CORSMiddleware
 
# Код с помощью которого были подобраны наилучшие параметры
def searchBestParams(X, y):
	# заново создадим модель, указав солвер
	clf = LogisticRegression(solver='saga')
	# опишем сетку, по которой будем искать
	param_grid = {
			'C': [1, 2, 3, 4],
			'penalty': ['l2'],
	}
	search = GridSearchCV(clf, param_grid, n_jobs=-1, cv=5, refit=True, scoring='accuracy')
	search.fit(X, y)
	return search.best_params_

#Загрузим данные из датасета
diabetes_df = pd.read_csv('./diabetes.csv', delimiter=',')
diabetes_df.columns = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age', 'Outcome']

# Подготовка данных
X = diabetes_df.drop('Outcome', axis =1).values
y = diabetes_df.Outcome.values
# Разобъём данные на тренировочные и тестовые
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

def createModel(): 
	# создание модели с указанием гиперпараметра C
	clf = LogisticRegression(C=1, penalty='l2')

	# обучение модели
	clf.fit(X_train, y_train)
      
	#оценка
	y_predict = clf.predict(X_test)
	score = accuracy_score(y_true=y_test, y_pred=y_predict)
	return {"clf": clf, "score": score}

class Data(BaseModel):
  Pregnancies: int
  Glucose: int
  BloodPressure: int 
  SkinThickness: int 
  Insulin: int
  BMI: int
  DiabetesPedigreeFunction: int
  Age: int 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

model = createModel()

@app.post("/")
async def create_item(data: Data):
    result = model.get('clf').predict([list(data.model_dump().values())])
    return {"result": int(result[0]), "score": float(model.get('score'))}
