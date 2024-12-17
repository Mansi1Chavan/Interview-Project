import React from 'react';
import '../css/MainPage.css';

const Mainpage = ({ username }) => {

    const arrayElements = [
        { title: 'Articles', label: 'Total', value: 325 },
        { title: 'Users', label: 'Total', value: 122 },
        { title: 'Services', label: 'Available', value: 405 },
        { title: 'Packages', label: 'Available', value: 405 }
    ]

    return (
        <div className="dashboard-container">

            {/* Sidebar */}
            <div className="sidebar">
                <img src='/images/Vector.png' className='img' alt='vector' />
                <div className='dashboard'>Dashboard </div>
                <hr></hr>
                <div className='dashboard'>Articles</div>
                <hr></hr>
                <div className='dashboard'>Lifestyle </div>
                <hr></hr>
            </div>
            <div className='main'>
                {/* Header */}
                <header className="header">
                    <div className='name'>
                        <h1>Hello {username}</h1>
                        <span>4.45 pm 19 Sep 2024</span>
                    </div>
                    <div className="searches">
                        <input type="text" placeholder="Search" />
                    </div>
                    <i class="fa-regular fa-bell"></i>
                    <p>ELLUJINIZE</p>
                    <div><img src="/images/book.avif" className='book' alt='books' /></div>

                </header>

                {/* Main Content */}
                <main className='row-items'>

                    <div className="main-content">
                        {arrayElements.map((item, index) => {
                            return (
                                <div key={index} className='grid-item'>
                                    <h3>{item.title}</h3>
                                    <p>{item.label}</p>
                                    <p>{item.value}</p>
                                </div>
                            )
                        })}
                    </div>

                   
                    <div className='row-patterns'>
                        <div className='articles'>
                            <div className='left-part'> <div><img src="/images/book.avif" className='book' alt='book' /></div>
                                <div><h3>Articles<div>325</div></h3></div></div>
                            <div className='feedback'>
                                <div className='likes'>Likes<div><b>325</b></div><hr className='gc'></hr></div>
                                <div className='likes'>Views<div><b>325</b></div><hr className='yc'></hr></div>
                                <div className='likes'>Saved<div><b>325</b></div><hr className='oc'></hr></div>
                                <div className='likes'>Shares<div><b>325</b></div><hr className='bc'></hr></div>
                            </div>
                        </div>
                        <div className='articles'>
                            <div className='left-part'> <div><img src="/images/book.avif" className='book' alt='book'/></div>
                                <div><h3>Articles<div><b>325</b></div></h3></div></div>
                            <div className='feedback'>
                                <div className='circle voilet views'><p>Likes<div><b>325</b></div></p></div>
                                <div className='circle orange views'><p>Views<div><b>325</b></div></p></div>
                                <div className='circle green views'><p>Saved<div><b>325</b></div></p></div>
                                <div className='circle yellow views'><p>Shares<div><b>325</b></div></p></div>
                            </div>
                        </div>
                        <div className='articles'>
                            <div className='left-part'>
                                <div><img src="/images/book.avif" className='book' alt='book' /></div>
                                <div><h3>Articles<div><b>325</b></div></h3></div></div>
                            <div className='feedback feedbackSecond'>
                                <div className='likes'>Service <div><b>325</b></div><hr className='yc'></hr></div>
                                <div className='likes'>Indivisual <div><b>325</b></div><hr className='oc'></hr></div>

                            </div>
                        </div>
                        <div className='articles'>
                            <div className='left-part'> 
                                 <div><img src="/images/book.avif" className='book' alt='book' /></div>
                                <div><h3>Articles<div><b>325</b></div></h3></div></div>
                            <div className='feedback'>
                                <div className='likes'>Current<div><b>325</b></div><hr className='yc'></hr></div>
                                <div className='likes'>Done<div><b>325</b></div><hr className='oc'></hr></div>
                                <div className='likes'>Cancel<div><b>325</b></div><hr className='bc'></hr></div>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default Mainpage;


