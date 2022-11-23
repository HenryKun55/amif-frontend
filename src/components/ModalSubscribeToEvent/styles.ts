export const reactModalStyles: ReactModal.Styles = {
  overlay: { zIndex: 50 },

  content: {
    top: '50%',
    left: '50%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    maxWidth: '500px',
    height: '500px',
    boxShadow: '0px 0px 20px 0px rgba(50, 50, 50, 0.75)',
    borderRadius: '0.25rem',
    padding: 0,
    overflow: 'hidden',
  },
}
