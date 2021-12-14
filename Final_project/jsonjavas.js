document.addEventListener("DOMContentLoaded", function() {
    
    fetch('finjson.json')
      .then(response => response.json())
      .then(resu => { 
        console.log('My ', resu);
        
        const table = document.createElement('table');
        let tr = document.createElement('tr');
        let th1 = document.createElement('th');
        let th2 = document.createElement('th');
        let th3 = document.createElement('th');
        let th4 = document.createElement('th');
       
      
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        
        let content = document.createTextNode('Book');
        th1.appendChild(content);
        
        content = document.createTextNode('ISBN-13');
        th2.appendChild(content);
      
        content = document.createTextNode('Price');
        th3.appendChild(content);
      

        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        
        
        table.appendChild(tr);
        
        resu.pharmacy.forEach((element, index) => {
          console.log('Row data ', element);  
          
          tr = document.createElement('tr');
          td1 = document.createElement('td');
          td2 = document.createElement('td');
          td3 = document.createElement('td');
          td4 = document.createElement('td');
         
          
          content = document.createTextNode(element.book);
          td1.appendChild(content);
          
          content = document.createTextNode(element.isbn);
          td2.appendChild(content);
          
          content = document.createTextNode(element.Price);
          td3.appendChild(content);
          
        
          
        
          
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          
          
          
          table.appendChild(tr);
          
        });
      
        document.body.appendChild(table);
      });
      
    });