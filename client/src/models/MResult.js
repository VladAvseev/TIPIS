import { types } from 'mobx-state-tree';

const MResult = types.model('result', {
	data: types.optional(types.model({
		result: types.boolean,
		score: types.number,
	}), {result: false, score: 0}),
})
.actions((self) => ({
	setData(value) {
		self.data = {...value, result: !!value.result};
	}
}));
export default MResult;