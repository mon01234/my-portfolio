import show_hide from '../utils/helpers';

function SentSuccess() {
    return (
        <div id="sent" className="d-none d-flex justify-content-center align-items-center vw-100 vh-100 position-fixed">
            Sent!
            <button className="btn btn-primary" onClick={show_hide}>check</button>
        </div>
    );
}

export default SentSuccess;