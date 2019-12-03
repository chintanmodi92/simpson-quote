import React from 'react';
import classes from './QuoteBox.module.css'
import TextArea from '../TextArea/TextArea'


const quoteBox = () => {
    return(
        <div id='quote-box' className={classes.QuoteBox}>
            <TextArea  />
           
        </div>
    )
};

export default quoteBox;