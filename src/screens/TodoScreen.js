import React from 'react'
import { Link } from 'react-router-dom'




export default function TodoScreen() {

    const [show, setshow] = React.useState(false)
    const toggle = () => {
        setshow(!show)
    }

    return (
        <div className='todo-main-div'>

            <div className='suggest'>

                <div className='div1'>
                    <button className='button-suggest'>suggested</button>
                </div>

                <div className='div2'>
                    <Link to='/task'>
                        <button>My Tasks</button>
                    </Link>
                </div>

            </div>

            <div className='week-7'>
                <h1>Week 7</h1>
            </div>

            <div className='margin-todos'>

                <div className='full-width' >

                    <div className='My-todos'>

                        <div className='todo-content'>
                            <p className=''>Discuess Couvede snydrom with your partner</p>
                        </div>
                        <div className='box'>
                            <div>
                                <i className='fa fa-plus'></i>

                            </div>
                        </div>
                    </div>

                </div>



                <div className='full-width' >
                    <div className='My-todos'>

                        <div className='todo-content'>
                            <p className=''>Discuess Couvede snydrom with your partner</p>
                        </div>
                        <div className='box'>
                            <div>
                                <i className='fa fa-plus'></i>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='full-width' >
                    <div className='check-box-div My-todos'>

                        <div className='todo-content'>
                            <p className=''>Discuess Couvede snydrom with your partner</p>
                        </div>
                        <div className='box'>
                            <div>
                                <i className='fa fa-plus'></i>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='full-width' >
                    <div onClick={toggle} className='check-box-div My-todos'>
                        <div className={show ? `todo-content` : `todo-content minus`}>
                            <p className=''>Discuess Couvede snydrom with your partner</p>
                        </div>
                        <div className='box-minus'>
                            <div><i className='fa fa-minus' ></i></div>
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <button className='week-checks'>
                    <div >a</div>
                    <div>Week 7</div>
                    <div><i className='fa fa-chevron-down'></i></div>

                </button>
            </div>
        </div>
    )
}
