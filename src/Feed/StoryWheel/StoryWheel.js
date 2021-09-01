import React from "react";
import "./StoryWheel.css";
import Story from "./Story/Story";

const StoryWheel = () => {
  return (
    <div className="story__wheel">
      <Story
        image="https://cdn.guidingtech.com/imager/assets/220378/add-multiple-photo-to-facebook-fb-and-messenger-story-6_7c4a12eb7455b3a1ce1ef1cadcf29289.png?1553352567"
        profileSrc="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
        title="hahahah"
      />
      <Story
        image="https://www.oberlo.com/media/1603958056-image1.png?w=1824&fit=max"
        profileSrc="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
        title="hahahaha"
      />
      <Story
        image="https://cdn.guidingtech.com/imager/assets/194065/facebook-fb-story-tips-and-tricks-4_7c4a12eb7455b3a1ce1ef1cadcf29289.jpg?1524142014"
        profileSrc="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
        title="hahahaha"
      />
      <Story
        image="https://iiepd.b-cdn.net/wp-content/uploads/2019/12/IIEPD.com-Instagram-Stories-101-Your-complete-Guide-Bring-Your-Instagram-Story-to-Life-by-Adding-Music-3.png"
        profileSrc="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
        title="hahahaha"
      />
      <Story
        image="https://cdn.guidingtech.com/imager/assets/194066/facebook-fb-story-tips-and-tricks-5_7c4a12eb7455b3a1ce1ef1cadcf29289.jpg?1524142015"
        profileSrc="https://www.assyst.de/cms/upload/sub/digitalisierung/18-F.jpg"
        title="hahahah"
      />
    </div>
  );
};

export default StoryWheel;
