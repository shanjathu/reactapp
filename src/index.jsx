import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'Yamahaa',
        year: '2010',
        model: 'Yamaha R15',
        make: 'Honda',
        media: 'http://www.choosemybike.in/media/kcfinder/upload/images/highest-mileage-yamaha-r15-motogp-edition.jpg',
        price: 'Rs 1,11,500'

    },
    {
        id: 2,
        name: 'Kawasaki',
        year: '2016',
        model: 'Versys 650',
        make: 'Mercedes',
        media: 'http://d3jth7oi254ls0.cloudfront.net/media/2016-kawasaki-versys-650-1451296491.77.jpg',
        price: 'Rs 6,60,000'

    },
    {
        id: 3,
        name: 'Benelli',
        year: '2016',
        model: 'X6',
        make: 'Benelli',
        media: 'http://d3jth7oi254ls0.cloudfront.net/media/1427283988.39-benelli-tnt1130R.jpg',
        price: 'Rs 68,9990'
    },
    {
        id: 4,
        name: 'BMW',
        year: '2016',
        model: 'R 1200 R ',
        make: 'BMW',
        media: 'http://d3jth7oi254ls0.cloudfront.net/media/images/product/bmw_r_1200_r_172_1.jpg',
        price: 'Rs 14,11,000'
    },
    {
        id: 5,
        name: 'Honda',
        year: '2017',
        model: 'CBR650F',
        make: 'Honda',
        media: 'http://d3jth7oi254ls0.cloudfront.net/media/2015-honda-cbr-650f-launched-1438788134.47.jpg',
        price: 'Rs 7,30,000'
    }
];

render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/bike" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/bike/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
