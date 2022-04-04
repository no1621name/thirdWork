const modalWindowStore = {
  state: {
    isShowModalWindow: false,
    modalWindowContent: null,
    documentImgSrc: null,
  },
  getters: {
    isShowModalWindow: ({ isShowModalWindow }) => isShowModalWindow,
    modalWindowContent: ({ modalWindowContent }) => modalWindowContent,
    documentImgSrc: ({ documentImgSrc }) => documentImgSrc,
  },
  mutations: {
    TOGGLE_MODAL_WINDOW(state, bool) {
      state.isShowModalWindow = bool;
    },
    CHANGE_MODAL_WINDOW_CONTENT(state, content) {
      state.modalWindowContent = content;
    },
    CHANGE_DOCUMENT_SRC(state, src) {
      state.documentImgSrc = src;
    },
  },
  actions: {
    toggleModalWindow({ commit }, bool) {
      commit('TOGGLE_MODAL_WINDOW', bool);
    },
    changeModalWindowContent({ commit }, { contentName, documentSrc }) {
      if (contentName === 'document') {
        commit('CHANGE_DOCUMENT_SRC', documentSrc);
        commit('CHANGE_MODAL_WINDOW_CONTENT', contentName);
      } else if (contentName === 'ordering') {
        commit('CHANGE_MODAL_WINDOW_CONTENT', contentName);
      }
    },
  },
};

export default modalWindowStore;
