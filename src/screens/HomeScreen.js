import React from 'react'

function HomeScreen() {
    const WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    const DAYS = [12, 13, 14, 15, 16, 15, 7]
    return (
        <div className='flex-1'>
            <div className='flex flex-row justify-between margin10'>


                <div className='none'>ads</div>

                <div className='flex flex-row week'>
                    <div><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
                    <div className='f'>
                        <p>Week 7</p>
                    </div>

                    <div><i class="fa fa-chevron-right" aria-hidden="true"></i></div>

                </div>
                <div>
                    <p>User</p>
                </div>
            </div>

            {/* calendar */}

            <div className='calnder'>
                {
                    WEEK.map((e) => {
                        return (
                            <div>
                                <p>{e}</p>
                            </div>
                        )
                    })
                }

            </div>

            <div className='calnder margincal'>
                {
                    DAYS.map((e) => {
                        return (
                            <div>
                                <p>{e}</p>
                            </div>
                        )
                    })
                }

            </div>

            <div>

                <div className='img'>
                    <img src='https://m.media-amazon.com/images/I/61PAHIylC4L._SL1200_.jpg' />
                </div>
                <div className='babysize'>
                    <div >
                        <p>Your Baby's Size</p>
                    </div>
                    <div className='main'>

                        <div className='lenght-main'>
                            <div className='lenght'>
                                <p>Length</p>
                            </div>
                            <div className='fit'>
                                <h3>11.6</h3>
                            </div>
                            <div className='fir2'>
                                <h6>11.6</h6>
                            </div>

                        </div>
                        <div>
                            <div className='lenght'>
                                <p>Weight</p>
                            </div>
                            <div className='fit'>
                                <h3>100</h3>
                            </div>
                            <div className='fir2'>
                                <h6>g</h6>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='weekly-outlook'>
                    <h1>Your Weekly Outlook</h1>
                </div>

                <div className='card'>
                    <div>
                        <img className='card-image' src='http://1.bp.blogspot.com/-GV_aYt3elV0/T84nErDNJ3I/AAAAAAAAAWI/me1tOJOqAm0/s1600/Waveform.jpg' />
                    </div>
                    <div className='Baby’s-Development'>
                        <p>Baby’s Development</p>
                    </div>
                    <div className='dic'>
                        <p>
                            At 23 weeks, a baby is typically 8 inches (20.3 centimeters) from the top of the head to the bottom of the buttocks (known as the crown-rump length). The baby's height is over 11 inches (28.9 centimeters) from the ...
                        </p>
                    </div>
                </div>


                {/* <div>
                    <img
                        className='fruit-image'
                        src='https://m.media-amazon.com/images/I/61PAHIylC4L._SL1200_.jpg'
                        alt='loading...'
                    />
                </div> */}

                {/* <div className='baby-size'>
                    <h2>Your Baby Size</h2>
                </div> */}

                {/* <div className='flex flex-row justify-around p-5 main-div-length'>
                    <div className='length ml-5'>
                        <div>
                            LENGTH
                        </div>
                        <div>
                            11.cm
                        </div>
                        <div className='font-lighter'>
                            cm
                        </div>
                    </div>
                    <div className='border'>

                    </div>

                    <div className='length mr-5'>
                        <div>
                            WEIGHT
                        </div>
                        <div>
                            100
                        </div>
                        <div className='font-lighter'>
                            w
                        </div>
                    </div>

                </div> */}
            </div>
            {/* <div>
                <h1 className='weekly'>Your Weekly Outlook</h1>
            </div> */}
            {/* <div className='card'>


                <div className='card-image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTqVbDb2MKOInlmhM3rkdRAJkW5ro0oZN2w&usqp=CAU' />
                </div>
                <div className='border1'>

                    <div className='card-heading'>
                        <h2>Baby's Development</h2>
                    </div>
                    <div className='card-para'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>

            </div> */}

            {/* <div className='card margin'>


                <div className='card-image'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTqVbDb2MKOInlmhM3rkdRAJkW5ro0oZN2w&usqp=CAU' />
                </div>
                <div className='border1'>

                    <div className='card-heading'>
                        <h2>Baby's Development</h2>
                    </div>
                    <div className='card-para'>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                </div>

            </div> */}


        </div>
    )
}

export default HomeScreen;
