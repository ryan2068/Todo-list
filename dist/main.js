(()=>{"use strict";const e=function(e,t,n,i){return this.title=e,this.description=t,this.dueDate=n,this.priority=i,{title:e,description:t,dueDate:n,priority:i}},t=document.querySelector("#content"),n=document.createElement("form"),i=document.createElement("div");i.classList.add("form-list-container"),(()=>{const e=document.createElement("input");e.setAttribute("id","title"),e.setAttribute("placeholder","Title of Task...");const d=document.createElement("input");d.setAttribute("id","description"),d.setAttribute("placeholder","Description of Task...");const c=document.createElement("input");c.setAttribute("id","dueDate"),c.setAttribute("placeholder","DueDate...");const o=document.createElement("button");o.classList.add("submit"),o.setAttribute("type","submit"),o.textContent="Submit",n.appendChild(e),n.appendChild(d),n.appendChild(c),n.appendChild(o),i.appendChild(n),t.appendChild(i)})(),document.querySelector(".submit").addEventListener("click",(n=>{n.preventDefault();const d=document.querySelector("#title").value,c=document.querySelector("#description").value,o=document.querySelector("#dueDate").value,r=document.querySelector("#priority"),l=new e(d,c,o,r);console.log(l);const a=document.createElement("ul"),u=document.createElement("li"),p=document.createElement("div"),s=document.createElement("div"),m=document.createElement("div"),h=document.createElement("div"),C=document.createElement("div"),b=document.createElement("input"),E=document.createElement("span");E.innerHTML="<em>important?</em>",b.setAttribute("id","priority"),b.setAttribute("type","checkbox"),b.classList.add("important-checkbox"),s.textContent=l.title,m.textContent=l.description,h.textContent=l.dueDate,b.textContent=l.priority,p.classList.add("list-left"),C.classList.add("DueDatePriorityContainer"),p.appendChild(s),p.appendChild(m),C.appendChild(h),C.appendChild(E),C.appendChild(b),u.appendChild(p),u.appendChild(C),a.appendChild(u),i.appendChild(a),t.appendChild(i)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsTUFBTUEsRUFBYSxTQUFTQyxFQUFPQyxFQUFhQyxFQUFTQyxHQUtyRCxPQUpBQyxLQUFLSixNQUFRQSxFQUNiSSxLQUFLSCxZQUFjQSxFQUNuQkcsS0FBS0YsUUFBVUEsRUFDZkUsS0FBS0QsU0FBV0EsRUFDVCxDQUFFSCxRQUFPQyxjQUFhQyxVQUFTQyxXQUMxQyxFQ0xNRSxFQUFhQyxTQUFTQyxjQUFjLFlBQ3BDLEVBQU9ELFNBQVNFLGNBQWMsUUFDOUJDLEVBQW9CSCxTQUFTRSxjQUFjLE9BQ2pEQyxFQUFrQkMsVUFBVUMsSUFBSSx1QkFHTCxNQUd2QixNQUFNQyxFQUFhTixTQUFTRSxjQUFjLFNBQzFDSSxFQUFXQyxhQUFhLEtBQU0sU0FDOUJELEVBQVdDLGFBQWEsY0FBZSxvQkFFdkMsTUFBTUMsRUFBbUJSLFNBQVNFLGNBQWMsU0FDaERNLEVBQWlCRCxhQUFhLEtBQU0sZUFDcENDLEVBQWlCRCxhQUFhLGNBQWUsMEJBRTdDLE1BQU1FLEVBQWVULFNBQVNFLGNBQWMsU0FDNUNPLEVBQWFGLGFBQWEsS0FBTSxXQUNoQ0UsRUFBYUYsYUFBYSxjQUFlLGNBR3pDLE1BQU1HLEVBQVlWLFNBQVNFLGNBQWMsVUFDekNRLEVBQVVOLFVBQVVDLElBQUksVUFDeEJLLEVBQVVILGFBQWEsT0FBUSxVQUMvQkcsRUFBVUMsWUFBYyxTQUl4QixFQUFLQyxZQUFZTixHQUNqQixFQUFLTSxZQUFZSixHQUNqQixFQUFLSSxZQUFZSCxHQUNqQixFQUFLRyxZQUFZRixHQUNqQlAsRUFBa0JTLFlBQVksR0FDOUJiLEVBQVdhLFlBQVlULEVBQWlCLEVDakM1Q1UsR0RxQ3NCYixTQUFTQyxjQUFjLFdBQy9CYSxpQkFBaUIsU0FBVUMsSUFDakNBLEVBQUVDLGlCQUNGLE1BQU10QixFQUFRTSxTQUFTQyxjQUFjLFVBQVVnQixNQUN6Q3RCLEVBQWNLLFNBQVNDLGNBQWMsZ0JBQWdCZ0IsTUFDckRyQixFQUFVSSxTQUFTQyxjQUFjLFlBQVlnQixNQUM3Q3BCLEVBQVdHLFNBQVNDLGNBQWMsYUFDbENpQixFQUFPLElBQUl6QixFQUFZQyxFQUFPQyxFQUFhQyxFQUFTQyxHQUMxRHNCLFFBQVFDLElBQUlGLEdBRVosTUFBTUcsRUFBS3JCLFNBQVNFLGNBQWMsTUFDNUJvQixFQUFLdEIsU0FBU0UsY0FBYyxNQUc1QnFCLEVBQVd2QixTQUFTRSxjQUFjLE9BQ2xDc0IsRUFBWXhCLFNBQVNFLGNBQWMsT0FDbkN1QixFQUFrQnpCLFNBQVNFLGNBQWMsT0FDekN3QixFQUFjMUIsU0FBU0UsY0FBYyxPQUNyQ3lCLEVBQTJCM0IsU0FBU0UsY0FBYyxPQUNsRDBCLEVBQWU1QixTQUFTRSxjQUFjLFNBQ3RDMkIsRUFBZ0I3QixTQUFTRSxjQUFjLFFBQzdDMkIsRUFBY0MsVUFBWSxzQkFDMUJGLEVBQWFyQixhQUFhLEtBQU0sWUFDaENxQixFQUFhckIsYUFBYSxPQUFRLFlBQ2xDcUIsRUFBYXhCLFVBQVVDLElBQUksc0JBRTNCbUIsRUFBVWIsWUFBY08sRUFBS3hCLE1BQzdCK0IsRUFBZ0JkLFlBQWNPLEVBQUt2QixZQUNuQytCLEVBQVlmLFlBQWNPLEVBQUt0QixRQUMvQmdDLEVBQWFqQixZQUFjTyxFQUFLckIsU0FFaEMwQixFQUFTbkIsVUFBVUMsSUFBSSxhQUN2QnNCLEVBQXlCdkIsVUFBVUMsSUFBSSw0QkFFdkNrQixFQUFTWCxZQUFZWSxHQUNyQkQsRUFBU1gsWUFBWWEsR0FDckJFLEVBQXlCZixZQUFZYyxHQUNyQ0MsRUFBeUJmLFlBQVlpQixHQUNyQ0YsRUFBeUJmLFlBQVlnQixHQUNyQ04sRUFBR1YsWUFBWVcsR0FDZkQsRUFBR1YsWUFBWWUsR0FPZk4sRUFBR1QsWUFBWVUsR0FDZm5CLEVBQWtCUyxZQUFZUyxHQUM5QnRCLEVBQVdhLFlBQVlULEVBQWlCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTUV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbn1cblxuXG5cblxuXG5leHBvcnQge2NyZWF0ZVRhc2t9XG5cblxuIiwiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCJcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5jb25zdCBmb3JtTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmZvcm1MaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWxpc3QtY29udGFpbmVyXCIpXG5cblxuY29uc3QgYWRkVGFza0lucHV0c1RvRG9tID0gKCkgPT4ge1xuXG4gICAgLy9UaXRsZSBpbnB1dFxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIilcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGUgb2YgVGFzay4uLlwiKVxuICAgIC8vRGVzY3JpcHRpb24gaW5wdXRcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpXG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uIG9mIFRhc2suLi5cIilcbiAgICAvL0R1ZURhdGUgaW5wdXRcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRHVlRGF0ZS4uLlwiKVxuXG4gICAgLy9TdWJtaXQgYnV0dG9uIFxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdFwiKVxuICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpXG4gICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIlxuXG5cbiAgICBcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgIGZvcm1MaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb3JtTGlzdENvbnRhaW5lcikgIFxufVxuXG5jb25zdCBhZGRBVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIilcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZVxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKVxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IGNyZWF0ZVRhc2sgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG5cbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBcbiAgICAgICAgLy9jcmVhdGluZyBsaXN0IGRldGFpbHMgb24gc3VibWl0XG4gICAgICAgIGNvbnN0IGxpc3RMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IER1ZURhdGVQcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgICAgIGNvbnN0IGltcG9ydGFudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKVxuICAgICAgICBpbXBvcnRhbnRTcGFuLmlubmVySFRNTCA9IFwiPGVtPmltcG9ydGFudD88L2VtPlwiXG4gICAgICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpXG4gICAgICAgIHRhc2tQcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIilcbiAgICAgICAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJpbXBvcnRhbnQtY2hlY2tib3hcIilcbiAgICAgICAgLy9zZXR0aW5nIGxpc3QgaW5wdXRzIGFzIGEgVG9EbyBsaXN0XG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGVcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvblxuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZVxuICAgICAgICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLnByaW9yaXR5XG5cbiAgICAgICAgbGlzdExlZnQuY2xhc3NMaXN0LmFkZChcImxpc3QtbGVmdFwiKVxuICAgICAgICBEdWVEYXRlUHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIkR1ZURhdGVQcmlvcml0eUNvbnRhaW5lclwiKVxuXG4gICAgICAgIGxpc3RMZWZ0LmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcbiAgICAgICAgbGlzdExlZnQuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKVxuICAgICAgICBEdWVEYXRlUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpXG4gICAgICAgIER1ZURhdGVQcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbXBvcnRhbnRTcGFuKVxuICAgICAgICBEdWVEYXRlUHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0TGVmdClcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoRHVlRGF0ZVByaW9yaXR5Q29udGFpbmVyKVxuXG5cbiAgICAgICAgXG5cblxuXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICBmb3JtTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh1bClcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb3JtTGlzdENvbnRhaW5lcilcbiAgICB9KVxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQge2FkZFRhc2tJbnB1dHNUb0RvbSwgYWRkQVRhc2t9IiwiaW1wb3J0IHsgYWRkQVRhc2ssIGFkZFRhc2tJbnB1dHNUb0RvbSB9IGZyb20gXCIuL0RPTUV2ZW50c1wiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCI7XG5cbmFkZFRhc2tJbnB1dHNUb0RvbSgpXG5hZGRBVGFzaygpIl0sIm5hbWVzIjpbImNyZWF0ZVRhc2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwidGhpcyIsImNvbnRlbnREaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVFbGVtZW50IiwiZm9ybUxpc3RDb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aXRsZUlucHV0Iiwic2V0QXR0cmlidXRlIiwiZGVzY3JpcHRpb25JbnB1dCIsImR1ZURhdGVJbnB1dCIsInN1Ym1pdEJ0biIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJhZGRUYXNrSW5wdXRzVG9Eb20iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJ0YXNrIiwiY29uc29sZSIsImxvZyIsInVsIiwibGkiLCJsaXN0TGVmdCIsInRhc2tUaXRsZSIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEdWVEYXRlIiwiRHVlRGF0ZVByaW9yaXR5Q29udGFpbmVyIiwidGFza1ByaW9yaXR5IiwiaW1wb3J0YW50U3BhbiIsImlubmVySFRNTCJdLCJzb3VyY2VSb290IjoiIn0=