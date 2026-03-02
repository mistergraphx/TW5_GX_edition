/*\
title: $:/gx/modules/sidebar.js
type: application/javascript
module-type: global

Closes the sidebar on mobile when navigating

\*/
(function(){

    /*jslint node: true, browser: true */
    /*global $tw: false */
    "use strict";

    const isOnMobile = () => {
      let bottombar = document.querySelector('.gx-header');
		  return bottombar && bottombar.getClientRects()[0].width < 960;
    };

    const closeSidebar = () => {
			$tw.wiki.setText("$:/state/sidebar", "text", undefined, "no");
    };

    const closeSidebarOnMobile = () => {
			if (isOnMobile()) {
				console.log("closing sidebar");
				closeSidebar();
			};
    };

    const setup = () => {
			$tw.hooks.addHook("th-navigating",function(event) {
				closeSidebarOnMobile();
				return event;
			});
    };

    setup();

    exports.closeNotebookSidebar = closeSidebar;
})();
