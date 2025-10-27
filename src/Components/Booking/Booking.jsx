"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import NiceSelect from "../Header/NiceSelect";
import Link from "next/link";
function Booking() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        destination: "",
        adventureType: "",
        duration: "",
        category: ""
    });

    const [formMessage, setFormMessage] = useState({ text: "", type: "" });

    const adventureOptions = [
        { value: "Heritage Harvest", label: "Heritage Harvest" },
        { value: "Al Andalus Pathways", label: "Al Andalus Pathways" },
        { value: "Leadership Journeys", label: "Leadership Journeys" },
        { value: "Sacred Land", label: "Sacred Land" },
        { value: "The House and Its History", label: "The House and Its History" },
        { value: "Culture and Society", label: "Culture and Society" },
        { value: "Art and Architecture", label: "Art and Architecture" },
    ];
    const durationOptions = [
        { value: "1 days", label: "1 days" },
        { value: "2 days", label: "2 days" },
        { value: "3 days", label: "3 days" },
        { value: "4 days", label: "4 days" },
        { value: "5 days", label: "5 days" },
        { value: "6 days", label: "6 days" },
    ];
    const categoryOptions = [
        { value: "Couples Retreat", label: "Couples Retreat" },
        { value: "Writers Retreat", label: "Writers Retreat" },
        { value: "Leadership Retreat", label: "Leadership Retreat" },
        { value: "Men Retreat", label: "Men Retreat" },
        { value: "Women Retreat", label: "Women Retreat" },
        { value: "Custom Retreat", label: "Custom Retreat" },
    ];

    const handleChange = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if ( !formData.adventureType || !formData.duration || !formData.category) {
            setFormMessage({ text: "Please fill in all fields before searching.", type: "error" });
           
            return;
        }

        // Redirect logic based on selected category
        const cat = formData.category;
        if (cat === 'Couples Retreat') {
            router.push('/book-your-stay/couple-retreat-form');
        } else if (cat === 'Custom Retreat') {
            router.push('/book-your-stay/organize-your-own-retreat');
        } else {
            router.push('/book-your-stay/booking-form');
        }

        // Optionally reset & message (can be removed since redirect happens)
        setFormMessage({ text: "Redirecting...", type: "success" });
        setFormData({ destination: "", adventureType: "", duration: "", category: "" });
    };

    return (
        <div className="booking-sec">
            <div className="container">
                <form onSubmit={handleSubmit} className="booking-form">
                    <div className="input-wrap">
                        <div className="row align-items-center justify-content-between">
                            {/* <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-route" />
                                </div>
                                <div className="search-input">
                                    <label>Destination</label>
                                    <NiceSelect
                                        options={destinationOptions}
                                        defaultValue="Select Destination"
                                        onChange={(value) => handleChange("destination", value)}
                                    />
                                </div>
                            </div> */}
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-regular fa-person-hiking" />
                                </div>
                                <div className="search-input">
                                    <label>Type</label>
                                    <NiceSelect
                                        options={adventureOptions}
                                        defaultValue="Adventure"
                                        onChange={(value) => handleChange("adventureType", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-clock" />
                                </div>
                                <div className="search-input">
                                    <label>Duration</label>
                                    <NiceSelect
                                        options={durationOptions}
                                        defaultValue="Duration"
                                        onChange={(value) => handleChange("duration", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group col-md-6 col-lg-auto">
                                <div className="icon">
                                    <i className="fa-light fa-map-location-dot" />
                                </div>
                                <div className="search-input">
                                    <label>Our Retreats</label>
                                    <NiceSelect
                                        options={categoryOptions}
                                        defaultValue="Select Category"
                                        onChange={(value) => handleChange("category", value)}
                                    />
                                </div>
                            </div>
                            <div className="form-btn col-md-12 col-lg-auto">
                                {/* <button className="th-btn" type="submit">
                                    <img src="/assets/img/icon/search.svg" alt="" />
                                    Book Retreat
                                </button> */}
                                    <Link  href="/book-your-stay/booking-form" className="th-btn" type="submit">
                                    <img src="/assets/img/icon/search.svg" alt="" />
                                    Book Retreat
                                </Link>
                            </div>
                        </div>

                        {/* Form Message Display */}
                        {formMessage.text && (
                            <p className={`form-messages mb-0 mt-3 ${formMessage.type === "error" ? "text-danger" : "text-success"}`}>
                                {formMessage.text}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Booking;
