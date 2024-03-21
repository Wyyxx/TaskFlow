import React from "react";
import "./ReadLaterPage.css";
function ReadLaterPage() {
    return (
        <div>
            <h1 className="leer-mas-tarde">Noticias guardadas</h1>
            <div className="card-container">
                <div className="card">
                    <div className="card-image"></div>
                    <div className="category">Illustration</div>
                    <div className="heading">A heading that must span over two lines
                        <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="category">Illustration</div>
                    <div className="heading">A heading that must span over two lines
                        <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image"></div>
                    <div className="category">Illustration</div>
                    <div className="heading">A heading that must span over two lines
                        <div className="author">By <span className="name">Abi</span> 4 days ago</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ReadLaterPage;

