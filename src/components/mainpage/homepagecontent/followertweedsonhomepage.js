import React from "react";
import { TWEED_DIV_ON_PAGE } from "./tweedDivOnPage";
import { connect } from "react-redux";
import { LIKE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/likebuttonhandler";
import { FAVORITE_BUTTON_HANDLER } from "/home/suzuka/Coding/the_odin_project/Projects/website-react-remake/my-app/src/components/mainpage/nestedcomponents/userfavorites/favbuttonhandler";

function FOLLOWER_TWEEDS_ON_HOMEPAGE(props) {

  let noUndefined = (item) => {
    return item != undefined;
  };

  const testVar = props.followedTweeds.tweedArray.filter(noUndefined);

  const tweedsDisplayFollowers = testVar.length
    ? testVar.map((tweed) => {
        return (
          <TWEED_DIV_ON_PAGE
            uid={tweed.uid}
            showOtherUserProfile={props.showOtherUserProfile}
            id={tweed.id}
            button={null}
            likeButton={
              <LIKE_BUTTON_HANDLER
                id={tweed.id}
                tweed={tweed.tweed}
                username={tweed.username}
                uniqueUid={props.uniqueUid}
                uid={tweed.uid}
              />
            }
            retweedButton={
              <FAVORITE_BUTTON_HANDLER
                id={tweed.id}
                uid={tweed.uid}
                uniqueUid={props.uniqueUid}
                tweed={tweed.tweed}
                username={props.username}
                usernameTweed={tweed.username}
              />
            }
            tweedText={tweed.tweed}
            username={tweed.username}
          />
        );
      })
    : null;

  return <>{tweedsDisplayFollowers}</>;
}

const mapStateToProps = (state) => {
  return {
    followedTweeds: state.followedTweeds,
  };
};

export default connect(mapStateToProps)(FOLLOWER_TWEEDS_ON_HOMEPAGE);
