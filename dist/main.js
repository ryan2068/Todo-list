(()=>{"use strict";const e=function(e,t,n,i){return this.title=e,this.description=t,this.dueDate=n,this.priority=i,{title:e,description:t,dueDate:n,priority:i}},t=document.querySelector("#content"),n=document.createElement("form");(()=>{const e=document.createElement("input");e.setAttribute("id","title"),e.setAttribute("placeholder","Title of Task...");const i=document.createElement("input");i.setAttribute("id","description"),i.setAttribute("placeholder","Description of Task...");const d=document.createElement("input");d.setAttribute("id","dueDate"),d.setAttribute("placeholder","DueDate");const c=document.createElement("input");c.setAttribute("id","priority"),c.setAttribute("placeholder","Priority of Task...");const o=document.createElement("button");o.classList.add("submit"),o.setAttribute("type","submit"),o.textContent="Submit",n.appendChild(e),n.appendChild(i),n.appendChild(d),n.appendChild(c),n.appendChild(o),t.appendChild(n)})(),document.querySelector(".submit").addEventListener("click",(n=>{n.preventDefault();const i=document.querySelector("#title").value,d=document.querySelector("#description").value,c=document.querySelector("#dueDate").value,o=document.querySelector("#priority").value,r=new e(i,d,c,o);console.log(r);const u=document.createElement("ul"),l=document.createElement("li"),a=document.createElement("div"),p=document.createElement("div"),s=document.createElement("div"),m=document.createElement("div");p.textContent=r.title,s.textContent=r.description,s.textContent=r.dueDate,l.appendChild(a),a.appendChild(p),a.appendChild(s),l.appendChild(m),u.appendChild(l),t.appendChild(u)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsTUFBTUEsRUFBYSxTQUFTQyxFQUFPQyxFQUFhQyxFQUFTQyxHQUtyRCxPQUpBQyxLQUFLSixNQUFRQSxFQUNiSSxLQUFLSCxZQUFjQSxFQUNuQkcsS0FBS0YsUUFBVUEsRUFDZkUsS0FBS0QsU0FBV0EsRUFDVCxDQUFFSCxRQUFPQyxjQUFhQyxVQUFTQyxXQUMxQyxFQ0xNRSxFQUFhQyxTQUFTQyxjQUFjLFlBQ3BDLEVBQU9ELFNBQVNFLGNBQWMsUUFHVCxNQUd2QixNQUFNQyxFQUFhSCxTQUFTRSxjQUFjLFNBQzFDQyxFQUFXQyxhQUFhLEtBQU0sU0FDOUJELEVBQVdDLGFBQWEsY0FBZSxvQkFFdkMsTUFBTUMsRUFBbUJMLFNBQVNFLGNBQWMsU0FDaERHLEVBQWlCRCxhQUFhLEtBQU0sZUFDcENDLEVBQWlCRCxhQUFhLGNBQWUsMEJBRTdDLE1BQU1FLEVBQWVOLFNBQVNFLGNBQWMsU0FDNUNJLEVBQWFGLGFBQWEsS0FBTSxXQUNoQ0UsRUFBYUYsYUFBYSxjQUFlLFdBRXpDLE1BQU1HLEVBQWdCUCxTQUFTRSxjQUFjLFNBQzdDSyxFQUFjSCxhQUFhLEtBQU0sWUFDakNHLEVBQWNILGFBQWEsY0FBZSx1QkFFMUMsTUFBTUksRUFBWVIsU0FBU0UsY0FBYyxVQUN6Q00sRUFBVUMsVUFBVUMsSUFBSSxVQUN4QkYsRUFBVUosYUFBYSxPQUFRLFVBQy9CSSxFQUFVRyxZQUFjLFNBSXhCLEVBQUtDLFlBQVlULEdBQ2pCLEVBQUtTLFlBQVlQLEdBQ2pCLEVBQUtPLFlBQVlOLEdBQ2pCLEVBQUtNLFlBQVlMLEdBQ2pCLEVBQUtLLFlBQVlKLEdBQ2pCVCxFQUFXYSxZQUFZLEVBQUksRUNsQy9CQyxHRHNDc0JiLFNBQVNDLGNBQWMsV0FDL0JhLGlCQUFpQixTQUFVQyxJQUNqQ0EsRUFBRUMsaUJBQ0YsTUFBTXRCLEVBQVFNLFNBQVNDLGNBQWMsVUFBVWdCLE1BQ3pDdEIsRUFBY0ssU0FBU0MsY0FBYyxnQkFBZ0JnQixNQUNyRHJCLEVBQVVJLFNBQVNDLGNBQWMsWUFBWWdCLE1BQzdDcEIsRUFBV0csU0FBU0MsY0FBYyxhQUFhZ0IsTUFDL0NDLEVBQU8sSUFBSXpCLEVBQVlDLEVBQU9DLEVBQWFDLEVBQVNDLEdBQzFEc0IsUUFBUUMsSUFBSUYsR0FFWixNQUFNRyxFQUFLckIsU0FBU0UsY0FBYyxNQUM1Qm9CLEVBQUt0QixTQUFTRSxjQUFjLE1BRzVCcUIsRUFBY3ZCLFNBQVNFLGNBQWMsT0FDckNzQixFQUFZeEIsU0FBU0UsY0FBYyxPQUNuQ3VCLEVBQWtCekIsU0FBU0UsY0FBYyxPQUN6Q3dCLEVBQWMxQixTQUFTRSxjQUFjLE9BQzNDc0IsRUFBVWIsWUFBY08sRUFBS3hCLE1BQzdCK0IsRUFBZ0JkLFlBQWNPLEVBQUt2QixZQUNuQzhCLEVBQWdCZCxZQUFjTyxFQUFLdEIsUUFJbkMwQixFQUFHVixZQUFZVyxHQUNmQSxFQUFZWCxZQUFZWSxHQUN4QkQsRUFBWVgsWUFBWWEsR0FDeEJILEVBQUdWLFlBQVljLEdBT2ZMLEVBQUdULFlBQVlVLEdBQ2Z2QixFQUFXYSxZQUFZUyxFQUFFLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlLXRhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL0RPTUV2ZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBjcmVhdGVUYXNrID0gZnVuY3Rpb24odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5IH1cbn1cblxuXG5cblxuXG5leHBvcnQge2NyZWF0ZVRhc2t9XG5cblxuIiwiaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL2NyZWF0ZS10YXNrXCJcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG5cblxuY29uc3QgYWRkVGFza0lucHV0c1RvRG9tID0gKCkgPT4ge1xuXG4gICAgLy9UaXRsZSBpbnB1dFxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIilcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiVGl0bGUgb2YgVGFzay4uLlwiKVxuICAgIC8vRGVzY3JpcHRpb24gaW5wdXRcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpXG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uIG9mIFRhc2suLi5cIilcbiAgICAvL0R1ZURhdGUgaW5wdXRcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWVEYXRlXCIpXG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRHVlRGF0ZVwiKVxuICAgIC8vUHJpb3JpdHkgaW5wdXRcbiAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpXG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIlByaW9yaXR5IG9mIFRhc2suLi5cIilcbiAgICAvL1N1Ym1pdCBidXR0b24gXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0XCIpXG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIilcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiXG5cblxuICAgIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9ybSkgIFxufVxuXG5jb25zdCBhZGRBVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIilcbiAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZVxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZVxuICAgICAgICBjb25zdCB0YXNrID0gbmV3IGNyZWF0ZVRhc2sgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2spXG5cbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBcbiAgICAgICAgLy9jcmVhdGluZyBsaXN0IGRldGFpbHMgb24gc3VibWl0XG4gICAgICAgIGNvbnN0IGxpc3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGVcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdGFzay5kZXNjcmlwdGlvblxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGVcblxuXG4gICAgICAgIFxuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaXN0RGV0YWlscylcbiAgICAgICAgbGlzdERldGFpbHMuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxuICAgICAgICBsaXN0RGV0YWlscy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKVxuXG5cbiAgICAgICAgXG5cblxuXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHVsKVxuICAgIH0pXG4gICAgXG59XG5cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7YWRkVGFza0lucHV0c1RvRG9tLCBhZGRBVGFza30iLCJpbXBvcnQgeyBhZGRBVGFzaywgYWRkVGFza0lucHV0c1RvRG9tIH0gZnJvbSBcIi4vRE9NRXZlbnRzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vY3JlYXRlLXRhc2tcIjtcblxuYWRkVGFza0lucHV0c1RvRG9tKClcbmFkZEFUYXNrKCkiXSwibmFtZXMiOlsiY3JlYXRlVGFzayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJ0aGlzIiwiY29udGVudERpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZUlucHV0Iiwic2V0QXR0cmlidXRlIiwiZGVzY3JpcHRpb25JbnB1dCIsImR1ZURhdGVJbnB1dCIsInByaW9yaXR5SW5wdXQiLCJzdWJtaXRCdG4iLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiYWRkVGFza0lucHV0c1RvRG9tIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlIiwidGFzayIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsImxpIiwibGlzdERldGFpbHMiLCJ0YXNrVGl0bGUiLCJ0YXNrRGVzY3JpcHRpb24iLCJ0YXNrRHVlRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=