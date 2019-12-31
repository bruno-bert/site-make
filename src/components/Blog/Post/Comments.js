import React from "react"

const DisqusComments = ( { postId } ) => {
    
    const DiscussionEmbed = require("disqus-react").DiscussionEmbed
    console.log('teste discus', postId)
    const config = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: { identifier: postId },
    }

    return (<DiscussionEmbed {...config}  />)

}

export default function Comments(props) {
   
      switch (props.provider){

        case ("disqus"): {
            return (<DisqusComments postId={props.postId} />)
            break;
        }
        default:{
            return (<div className="post-comments-not-supported"><span>Comments provider not supported</span></div>)
            break; 
        } 
        
      }

}