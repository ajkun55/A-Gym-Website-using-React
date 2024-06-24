import PropTypes from 'prop-types'

export default function FeatureBox(props) {

    const {image, title} = props;

    return (
        <div className="a-box">
        <div className="a-b-img">
            <img src={image} alt="" />
        </div>
        <div className="a-b-text">
            <h2>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>
        </div>
    )
}
FeatureBox.propTypes = {
    image: PropTypes.node,
    title: PropTypes.string
}
