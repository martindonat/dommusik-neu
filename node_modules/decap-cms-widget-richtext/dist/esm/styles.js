import _styled from "@emotion/styled/base";
import { fonts, zIndex } from 'decap-cms-ui-default';
export const editorStyleVars = {
  stickyDistanceBottom: '0'
};
export const EditorControlBar = /*#__PURE__*/_styled("div", {
  target: "eaxgqk30",
  label: "EditorControlBar"
})("z-index:", zIndex.zIndex200, ";position:sticky;top:0;margin-bottom:", editorStyleVars.stickyDistanceBottom, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTzBDIiwiZmlsZSI6Ii4uLy4uL3NyYy9zdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBmb250cywgekluZGV4IH0gZnJvbSAnZGVjYXAtY21zLXVpLWRlZmF1bHQnO1xuXG5leHBvcnQgY29uc3QgZWRpdG9yU3R5bGVWYXJzID0ge1xuICBzdGlja3lEaXN0YW5jZUJvdHRvbTogJzAnLFxufTtcblxuZXhwb3J0IGNvbnN0IEVkaXRvckNvbnRyb2xCYXIgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAke3pJbmRleC56SW5kZXgyMDB9O1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206ICR7ZWRpdG9yU3R5bGVWYXJzLnN0aWNreURpc3RhbmNlQm90dG9tfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBlZGl0b3JDb250YWluZXJTdHlsZXMgPSBgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6ICR7Zm9udHMucHJpbWFyeX07XG4gIG1hcmdpbi10b3A6IC0ke2VkaXRvclN0eWxlVmFycy5zdGlja3lEaXN0YW5jZUJvdHRvbX07XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6ICR7ekluZGV4LnpJbmRleDEwMH07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbmA7XG4iXX0= */"));
export const editorContainerStyles = `
  position: relative;
  font-family: ${fonts.primary};
  margin-top: -${editorStyleVars.stickyDistanceBottom};
  padding: 0;
  display: flex;
  flex-direction: column;
  z-index: ${zIndex.zIndex100};
  white-space: pre-wrap;
`;