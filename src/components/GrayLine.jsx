
const GrayLine = ({ color, classNames }) => {
    return (
        <hr className={ `${color ? `border-t-${color}` : `border-t-[#414141]`} ${classNames}` } />
    );
};

export default GrayLine;