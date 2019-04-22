// Order Nav for insert an order it's stack nav with following..
// first Book, then order_recipt, then payment_method and finally thanks screen 

import { createStackNavigator } from 'react-navigation';

import Book from '../pages/Book';
import Book1 from '../pages/Book1';
import Thanks from '../pages/Thanks';
import Payment from '../pages/Payment';
import Order_Recipt from '../pages/Order_Recipt';
import Chat  from '../pages/Chat';


export default OrderNavigator = createStackNavigator(
    {
        Book: {
            screen: Book,
            navigationOption:{
                title:"Book", 
            }
        },
        Book1: {
            screen: Book1,
            navigationOption:{
                title:"Book1", 
            }
        },
        Order_Recipt: {
            screen: Order_Recipt,
            navigationOption:{
                title:"Order_Recipt", 
            }
        },
        Payment: {
            screen: Payment,
            navigationOption:{
                title:"Payment", 
            }
        },
        Thanks: {
            screen: Thanks,
            navigationOption:{
                title:"Thanks", 
            }
        },
        Chat: {
            screen: Chat,
            navigationOption:{
                title:"Chat", 
            }
        },
    },
    {
        navigationOptions:{
            header: null,
        }
    }
)