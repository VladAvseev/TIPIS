import { types } from 'mobx-state-tree';

const MForm = types.model('form', {
	Pregnancies: types.maybe(types.number),
	Glucose: types.maybe(types.number),
	BloodPressure: types.maybe(types.number),
	SkinThickness: types.maybe(types.number),
	Insulin: types.maybe(types.number),
	BMI: types.maybe(types.number),
	DiabetesPedigreeFunction: types.maybe(types.number),
	Age: types.maybe(types.number),
})
.views((self) => ({
	get data() {
		return {
			Pregnancies: self.Pregnancies || 0,
			Glucose: self.Glucose || 0,
			BloodPressure: self.BloodPressure || 0,
			SkinThickness: self.SkinThickness || 0,
			Insulin: self.Insulin || 0,
			BMI: self.BMI || 0,
			DiabetesPedigreeFunction: self.DiabetesPedigreeFunction || 0,
			Age: self.Age || 0,
		}
	}
}))
.actions((self) => ({
	setPregnancies(value) {
		if (value < 0) {
			self.Pregnancies = 0;
		} else {
			self.Pregnancies = value;
		}
	},
	setGlucose(value) {
		if (value < 0) {
			self.Glucose = 0;
		} else {
			self.Glucose = value;
		}
	},
	setBloodPressure(value) {
		if (value < 0) {
			self.BloodPressure = 0;
		} else {
			self.BloodPressure = value;
		}
	},
	setSkinThickness(value) {
		if (value < 0) {
			self.SkinThickness = 0;
		} else {
			self.SkinThickness = value;
		}
	},
	setInsulin(value) {
		if (value < 0) {
			self.Insulin = 0;
		} else {
			self.Insulin = value;
		}
	},
	setBMI(value) {
		if (value < 0) {
			self.BMI = 0;
		} else {
			self.BMI = value;
		}
	},
	setDiabetesPedigreeFunction(value) {
		if (value < 0) {
			self.DiabetesPedigreeFunction = 0;
		} else if (value > 100) {
			self.DiabetesPedigreeFunction = 1;
		} else {
			self.DiabetesPedigreeFunction = value / 100;
		}
	},
	setAge(value) {
		if (value < 0) {
			self.Age = 0;
		} else {
			self.Age = value;
		}
	},
}));
export default MForm;