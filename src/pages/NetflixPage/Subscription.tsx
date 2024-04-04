/*
    Styling in React
    --------
        0. Global styles in index.css
        1. External style for components
        2. Internal style
        3. Inline style
        4. CSS Modules
        5. Styled-components or @emotion
*/

// CSS Module - Import
import subscriptionInfoStyles from './Subscription.module.css';
import styled from 'styled-components';

// Styled Component definition
const CouponCodePara = styled.strong`
color: #ffc107;

&:hover {
    color: #1da1f2;
}
`;

const Subscription:React.FC = () => {

    const subscriptionStyles = {
        renewStyles : {
            backgroundColor: "yellow",
            color: "#000",
            borderRadius: "10px",
            padding: "20px"
        },
        renewBtnStyles : {
            backgroundColor: "#0c0c0c",
            color: "#fff",
            padding: "10px 25px"
        }
    }

  return (
    <div className='text-center'>
        <h3 className={subscriptionInfoStyles["subscription-info"]}>
            You are an Active Subscriber of Netflix Pro
        </h3>
        <p style={{
        backgroundColor: "red",
        color: "#fff",
        borderRadius: "10px",
        border: "3px solid darkred",
        padding: "20px"
    }}>
            Your subscription ends in 2 weeks
        </p>
        {/* Using styled component <CouponCodePara> created */}
        <p style={subscriptionStyles.renewStyles}>Renew now to get 50% discount <CouponCodePara>COUPON CODE: USEME50</CouponCodePara></p>
        <button className='btn' style={subscriptionStyles.renewBtnStyles}>RENEW NOW</button>
    </div>
  )
}

export default Subscription