import React from 'react'
import QuotesBox from '../components/QuotesBox'

const Quotes = ({ quote }) => {
  return (
    <div className='Quotes'>
      <QuotesBox
        quote={quote}
      />
    </div>
  )
}

export default Quotes