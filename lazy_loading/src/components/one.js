import pic from './lazy.jpg'

const Message=()=>
{
    return(
        <div>
            <h1>Lazy loading is here</h1>
            <img src={pic} alt=''></img>
        </div>
    );
}

export default Message;