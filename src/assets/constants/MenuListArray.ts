//Sandwichs
import crispy from '../images/sandwich/crispy.jpg';
import shawrma from '../images/sandwich/shawarma.jpg';
import chips from '../images/sandwich/chips.jfif';
import Falafel from '../images/sandwich/flafel.jpg';
import burger from '../images/sandwich/burger.jpg';
import cheeseBurger from '../images/sandwich/cheese.jfif';
//Meals
import crispyM from '../images/meals/crispy.jpg';
import shawrmaM from '../images/meals/shawrma.jpg';
import chipsM from '../images/meals/chips.jpeg';
import FalafelM from '../images/meals/falafel.jpg';
import kababM from '../images/meals/kabab.jpg';
//Juices
import orange from '../images/juices/orange.jpg';
import strawberry from '../images/juices/strawberry.jpg';
import mango from '../images/juices/mango.jpg';
import cocktail from '../images/juices/cocktail.jpg';


export const MenuListArray = [
    {
        itemsType: 'Sandwich',
        items: [
            {
                img: crispy,
                num: 1,
                name: 'Crispy',
                unitPrice: 2000,
            }, {
                img: shawrma,
                num: 1,
                name: 'Shawrma',
                unitPrice: 1500
            }, {
                img: Falafel,
                num: 1,
                name: 'Falafel',
                unitPrice: 500
            }, {
                img: chips,
                num: 1,
                name: 'Chips',
                unitPrice: 1000
            }, {
                img: burger,
                num: 1,
                name: 'Burger',
                unitPrice: 1500
            }, {
                img: cheeseBurger,
                num: 1,
                name: 'Cheese Burger',
                unitPrice: 2000
            }
        ]
    },
    {
        itemsType: 'Meals',
        items: [
            {
                img: crispyM,
                num: 1,
                name: 'Crispy-meal',
                unitPrice: 2500
            },
            {
                img: shawrmaM,
                num: 1,
                name: 'Shawrma-meal',
                unitPrice: 2000
            },
            {
                img: chipsM,
                num: 1,
                name: 'Chips-meal',
                unitPrice: 1000
            },
            {
                img: FalafelM,
                num: 1,
                name: 'Falafel-meal',
                unitPrice: 500
            },
            {
                img: kababM,
                num: 1,
                name: 'Kabab-meal',
                unitPrice: 3000
            },
        ]
    }, {
        itemsType: 'Juices',
        items: [
            {
                img: orange,
                num: 1,
                name: 'Orange',
                unitPrice: 1000
            },
            {
                img: mango,
                num: 1,
                name: 'Mango',
                unitPrice: 1000
            },
            {
                img: strawberry,
                num: 1,
                name: 'Strawberry',
                unitPrice: 1500
            },
            {
                img: cocktail,
                num: 1,
                name: 'Cocktail',
                unitPrice: 1500
            },
        ]
    },
]