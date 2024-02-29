import ReduxToast from 'react-redux-toastr';

const ToastProvider = () => {
	return (
		<ReduxToast
			newestOnTop={true}
			closeOnToastrClick
			position="bottom-left"
			transitionIn="fadeIn"
			transitionOut="fadeOut"
		/>
	);
};

export default ToastProvider;
