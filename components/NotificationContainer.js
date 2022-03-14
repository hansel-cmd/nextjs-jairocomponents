import Link from 'next/link'
import styles from '../styles/NotificationContainer.module.css'


const NotificationContainer = ({info}) => {
    return (
        <div className={`card shadow border border-info ${styles['notif-container']}`}>

            {/* Header */}
            <div className="card-header bg-transparent pt-2 px-4 pb-2">
                <div className="row align-items-center">
                    <div className="col-6 col-sm-6">
                        <p className="text-info fw-bold mb-0">{info.title}</p>
                    </div>
                    <div className="col-6 col-sm-6 d-flex justify-content-end align-items-start">
                        <span className="ps-3">
                            <i className="bi bi-gear"></i>
                        </span>

                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className={`card-body px-4 ${styles['custom-scrollbar']}`}>

                {/* Content Container */}
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                        return (
                            <div key={index}>
                                <div>
                                    <p className="mb-0 text-info fw-bold">Jairosoft Reminder!</p>
                                    <p className="mb-0 text-secondary">You haven't completed your Profile!</p>
                                    <p className="mb-2 text-secondary fs-7">1h ago</p>
                                    <button className="btn btn-info p-1 fs-7">Go to My Profile</button>
                                </div>


                                <hr />
                            </div>
                        )
                    })
                }

                {/* No Notification */}
                <div className="fw-bold text-center">
                    You have 0 {info.title}
                </div>





            </div>
            <div className="card-footer bg-transparent">
                <button className="btn btn-info w-100 py-1">All {info.title}</button>
            </div>
        </div>
    );
}

export default NotificationContainer;