import { types } from 'mobx-state-tree';
import form from './MForm';
import axios from 'axios';
import MResult from './MResult';
import MForm from './MForm';

const appStore = types.model('appStore', {
	// pages: types.optional(
	// 	types.model({
	// 		form: types.string,
	// 		loading: types.string,
	// 		result: types.string,
	// 	}),
	// 	{
	// 		form: 'form',
	// 		loading: 'loading',
	// 		result: 'result'
	// 	}),
	currentPage: types.optional(types.string, 'form'),
	form: types.optional(MForm, {}),
	result: types.optional(MResult, {}),
}).actions((self) => ({
	openFormPage() {
		self.currentPage = 'form';
	},
	openLoadingPage() {
		self.currentPage = 'loading';
	},
	openResultPage() {
		self.currentPage = 'result';
	},
}))
.actions((self) => ({
	async sendData() {
		try {
			self.openLoadingPage();
			const { data } = await axios.post('http://localhost:8000', self.form.data);
			self.result.setData(data);
			self.openResultPage();
		} catch(e) {
			console.log(e);
			self.openFormPage();
		}
	}
}))
.create({});
export default appStore;