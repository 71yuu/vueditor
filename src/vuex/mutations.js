/**
 * Created by vwvo on 2016/8/29.
 */

const mutations = {

    UPDATE_TB_ACTIVE (state, iframeDoc) {
        for(let name in state.toolBtns){
            try {
                state.toolBtns[name].active = iframeDoc.queryCommandState(name);
            }catch (e){}
        }
    },

    UPDATE_TB_DISABLED (state) {
        let disabled = state.currentView !== 'design';
        for(let name in state.toolBtns){
            state.toolBtns[name].disabled = disabled;
        }
        state.toolBtns.view.disabled = false;
    },

    UPDATE_TB_DROPDOWN_DISPLAY (state, current) {
        current && (state.toolBtns[current].showmenu = !state.toolBtns[current].showmenu);
        for(let name in state.toolBtns){
            name != current && (state.toolBtns[name].showmenu = false);
        }
    },
    
    UPDATE_CONTENT (state, content) {
        state.content = content;
    },

    SWITCH_VIEW (state) {
        state.currentView = state.currentView == 'design' ? 'sourceCode' : 'design';
    }

};

export default mutations;