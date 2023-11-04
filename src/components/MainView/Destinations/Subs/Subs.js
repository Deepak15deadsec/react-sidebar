import React from 'react';
import * as s from "./Subs.styles";

const Subs = props => {
  const subs = props.match.params.subs;
  const options = {
    Merchant: {
      
      description: 'Merchant'
    },
    RetailerStore: {
      
      description: 'Retailer Store'
    },
    Rack: {
     
      description: 'Rack'
    },
    Machine: {
      
      description: 'Machine'
    },
    Match: {
      
      description: 'Match'
    },
    Hawkeye: {
      
      description: 'Hawkeye'
    }
  }

  return (
    <s.SubsContainer>
      <s.SubsDescription>{options[subs]['description']}</s.SubsDescription>
    </s.SubsContainer>
  )
}

export default Subs