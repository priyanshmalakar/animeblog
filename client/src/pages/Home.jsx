import React from 'react';
import Navbar from '../component/Navbar';
import Details from '../component/Details'
import Footer from '../component/Footer';
import MiddleBlog from '../component/Middleblog';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Details mainTitle="ANIME BLOG"
        mainContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis tortor id dictum aliquet. Aliquam fermentum sem nibh, vel fermentum tellus luctus vel. Vivamus in justo id neque eleifend lobortis ac ut eros. Cras neque eros, pretium quis ultrices sed, fringilla eget purus. Curabitur aliquet luctus auctor. Vivamus malesuada velit augue, eu aliquam massa mattis condimentum. Donec sed tortor tempor, maximus enim vel, bibendum"
      />
      <MiddleBlog />
      <Footer />
    </div>
  )
}