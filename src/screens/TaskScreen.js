import React from 'react'
import { Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'



export default function TaskScreen() {

    return (
        <div className='todo-main-div'>

            <div className='suggest'>
                <div className='div1'>
                    <Link to='/todos' >
                    <button className='button-suggest'>suggested</button>
                    </Link>
                </div>
                <div className='div2'>
                    {/* <Link> */}
                        <button>My Tasks</button>
                    {/* </Link> */}
                </div>
            </div>
            <div className='week-7'>
                <h1>Week 7</h1>
            </div>
            <div className='margin-todos'>

              

            
                <div className='full-width' >
                    <div className='check-box-div My-todos'>

                        <div className='todo-content'>
                            <p className=''>Discuess Couvede snydrom with your partner</p>
                        </div>
                        <div>

                            <Checkbox className='check' />
                        </div>
                    </div>
                </div>
                <div className='full-width' >
                    <div className='check-box-div My-todos'>

                        <div className='todo-content'>
                            <p className=''>Discuess Couvede snydrom with your partner</p>
                        </div>
                        <div>

                            <Checkbox className='check' />
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <button className='week-checks'>
                    <div>a</div>
                    <div>Week 7</div>
                    <div><i className='fa fa-chevron-down'></i></div>

                </button>
            </div>
        </div>
    )
}
