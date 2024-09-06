import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>

                <h1>Contact Us</h1>

                <form>
                    <div>
                        <label>Name</label>
                        <input type="text"  required placeholder='ABC'/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email"  required placeholder='ABC@syx.com'/>
                    </div>
                    <div>
                        <label>Message</label>
                        <input type="text"  required placeholder='My Message'/>
                    </div>

                    <button type='Submit'>Send</button>
                </form>
            </main>

        </div>


    )
}

export default Contact