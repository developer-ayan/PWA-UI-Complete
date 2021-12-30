import React from 'react'
import { Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'



export default function TodoScreen() {

    return (
        <div className='todo-main-div'>
            <div className='suggest'>
                <div>
                    <button>suggested</button>
                </div>
                <div>
                    <Link to='/task'>
                        <button>My Tasks</button>
                    </Link>
                </div>
            </div>
            <div className='week-7'>
                <h1>Week 7</h1>
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

            <div>
                <button>
                    <div></div>
                    <div>Week</div>
                    <div></div>

                </button>
            </div>
        </div>
    )
}
