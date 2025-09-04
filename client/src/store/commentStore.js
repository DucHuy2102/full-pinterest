import { create } from 'zustand';

const useCommentStore = create((set) => ({
    comment: null,
    isEditing: false,

    setComment: (comment) => set({ comment, isEditing: !!comment }),
    updateComment: (comment) => set({ comment, isEditing: !!comment }),
    clearComment: () => set({ comment: null, isEditing: false }),
}));

export default useCommentStore;
