import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

function DOBScreen() {
    return (
        <div >

            {/* Logo  */}

            <div className=''>

                {/* length question  */}

                <div className='align'>
                    <p>1 of 1</p>
                </div>



                {/* Question  */}

                <div className='question'>
                    <h3>When is the expected due date of your child ?</h3>
                </div>

                {/* dropdown  */}

                <div className='dropdown-div'>

                    <div>
                        <p>pp</p>
                    </div>

                    <div>
                        <p>icon</p>
                    </div>

                </div>

                <div className='dropdown-div margintop-last-din'>

                    <div>
                        <p>mm</p>
                    </div>

                    <div>
                        <p>icon</p>
                    </div>

                </div>

                <div className='dropdown-div margintop-last-din'>

                    <div>
                        <p>yyyy</p>
                    </div>

                    <div>
                        <p>icon</p>
                    </div>

                </div>
                {/* <div>


                    <div className='d-flex'>
                        <div>
                            <p>dd</p>
                        </div>
                        <div>
                            <i class="fas fa-caret-down"></i>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div>
                            <p>mm</p>
                        </div>
                        <div>
                            <i class="fas fa-caret-down"></i>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <p>yy</p>
                        </div>
                        <div>
                            <i class="fas fa-caret-down"></i>
                        </div>
                    </div>
                </div> */}

                {/* caption */}

                <div>
                    <p className='underline parag'>
                        I don't know my calculate due date
                    </p>
                </div>

                {/* continue button  */}

                <Link to='/Home'>
                    <button className='Continue-but'>
                        Continue
                    </button>
                </Link>


            </div>



        </div>
    )
}

export default DOBScreen;