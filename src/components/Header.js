import React, { Component } from "react"
import { FaInfoCircle, FaWindowClose,  FaGithub} from "react-icons/fa";
import './header.css';
import Modal from "react-modal"
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            infoModal: false
        }
    }
    openModal = () => {
        this.setState({ infoModal: true })
    }

    closeModal = () => {
        this.setState({ infoModal: false })
    }

    render() {
        let modalStyles = {
            content: {
                margin: "0 auto",
                height: "auto",
                width: "40vw",
                textAlign: "left"
            }
        }

        let closeBtn = {
            float: "right",
            cursor: "pointer"
        }

        
        return (
            <div className="headerStyles">
                {Modal.setAppElement('#root')}
                <FaInfoCircle size="2em" className="infoBtn" onClick={this.openModal} />
                <Modal style={modalStyles} isOpen={this.state.infoModal}>
                    {<FaWindowClose size="1.5em" onClick={this.closeModal} style={closeBtn}/>}
                    <h2>Information</h2>
                    <p> All of the information and images are provided by the
                    Harvard Art Museums API. This project is built using React as a form
                    of experimentation and practice. If you enjoy the project and want to view the code 
                    the github is below as well as links to the HAM API. 
                    </p>

                    <p>Enjoy and please remember...don't touch the art.</p>

                    <ul className="creditList">
                        <li><a href="https://www.harvardartmuseums.org/">Harvard Art Museum</a></li>
                        <li><a href="https://github.com/harvardartmuseums/api-docs">HAM API</a></li>   
                    </ul>

                    <a href="https://github.com/jakescript/RandomClicksOfArt">{<FaGithub className="gitIco" size="3em"/>}</a>

                </Modal>
            </div>
        )
    }
}

export default Header