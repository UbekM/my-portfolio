import React from 'react'

const GoogleMap = () => {
    return (
        <div className='rounded-[8px] p-2 mt-12 bg-[#0E0E0E] w-fit border-[#FFFFFF26] border-[1px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.921911285224!2d7.872742099999994!3d5.0300047999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d55fb5f789f47%3A0xa94598ef61ab75d6!2sIdoro%20Rd%2C%20Akwa%20Ibom!5e0!3m2!1sen!2sng!4v1736705034143!5m2!1sen!2sng" width="340" height="260" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-[8px] w-56 h-40 md:w-96 md:h-64 lg:w-72 lg:h-60'></iframe>
        </div>
    )
}

export default GoogleMap