import Batch from '../components/Settings/Batch/BatchForm'
import { connect } from 'react-redux'

import { loadBatchForm, createBatch,saveFailedBatchForm, editBatchForm} from '../actions/BatchActions'


const mapStateToProps=(state)=>{
	return{
		isSaving : state.batchForm.isFetching,
		hasError : state.batchForm.hasError,
		message : state.batchForm.message,
		batch : state.batchForm.batch,
		batches: state.batch.batches

	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
		saveForm: (batch)=> {
			dispatch(createBatch(batch))
		},
		editForm: (batch)=>{
			dispatch(editBatchForm(batch))
		},
		failedSave: (message)=>{
			dispatch(saveFailedBatchForm(message))
		}
	}
}

const BatchContainer = connect(mapStateToProps, mapDispatchToProps)(Batch)

export default BatchContainer