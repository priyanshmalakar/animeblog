import React from "react";
import Services from "./Services";
export default function Middleblog() {
    return (
        <div className="middle-main-container">
            <div className="m-container">
                <h1 className="m-title">Services</h1>
                <div className="service-grid">
                    <Services heading="Public Blog" paragraph="You can create your Blog publicly and build your own community." image="public"/>
                    <Services heading="customization" paragraph="Easy blog Building and customization." image="tune" />
                    <Services heading="create and Share" paragraph="Create your Blog and share with your friends and family and take feedback from it." image="share_reviews" />
                </div>
            </div>
        </div>
    )
}