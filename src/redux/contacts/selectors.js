import { selectNameFilter } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectDeleteModalIsOpen = (state) =>
  state.contacts.deleteModalIsOpen;
export const selectEditModalIsOpen = (state) => state.contacts.editModalIsOpen;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    const filteredByName = contacts.filter((item) =>
      item.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    const filteredByNumber = contacts.filter((item) =>
      item.number.includes(nameFilter)
    );

    return filteredByName.length > 0 ? filteredByName : filteredByNumber;
  }
);
