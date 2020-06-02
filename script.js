const url= 'https://disease.sh/v2/states';
fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log(data);
    let table = document.createElement('table');
    table.setAttribute('style', 'width:100%');
    table.setAttribute('id', 'mytable');
    table.setAttribute('class', 'mytable');
    
    document.body.appendChild(table);
   
    let row = document.createElement('tr');
   
    let tab_head1 = document.createElement('th');
    tab_head1.innerHTML = 'State';
   
    tab_head1.setAttribute('onClick', 'sortTable(0)')
    tab_head1.setAttribute('style','padding-top: 12px; padding-bottom: 12px; text-align: justify; background-color: #4CAF50; color: white')
    row.appendChild(tab_head1);
   
    let tab_head2 = document.createElement('th');
    tab_head2.innerHTML = 'cases';
    tab_head2.setAttribute('onClick', 'sortTable(1)')
    tab_head2.setAttribute('style','padding-top: 12px; padding-bottom: 12px; text-align: justify; background-color: #4CAF50; color: white')
    row.appendChild(tab_head2);
   
    let tab_head3 = document.createElement('th');
    tab_head3.innerHTML = 'Today-Cases';
    tab_head3.setAttribute('onClick', 'sortTable(2)')
    tab_head3.setAttribute('style','padding-top: 12px; padding-bottom: 12px; text-align: justify; background-color: #4CAF50; color: white')
    row.appendChild(tab_head3);
   
    let tab_head4 = document.createElement('th');
    tab_head4.innerHTML = 'Deaths';
    tab_head4.setAttribute('onClick', 'sortTable(3)')
    tab_head4.setAttribute('style','padding-top: 12px; padding-bottom: 12px; text-align: justify; background-color: #4CAF50; color: white')
    row.appendChild(tab_head4);
   
    let tab_head5 = document.createElement('th');
    tab_head5.innerHTML = 'Active';
    tab_head5.setAttribute('onClick', 'sortTable(4)')
    tab_head5.setAttribute('style','padding-top: 12px; padding-bottom: 12px; text-align: justify; background-color: #4CAF50; color: white')
    row.appendChild(tab_head5);

    table.appendChild(row);
    
    let tab_body = document.createElement('tbody');
    for(let c=0;c<20;c++)
    { 
      
      let row = document.createElement('tr');
      
      let tab_data1 = document.createElement('td');
      tab_data1.setAttribute('style', 'border: 1px solid #ddd;padding: 15px; background: #FFF;border-bottom: none;border-left: none; border-right: 1px solid #CCC;border-top: 1px solid #DDD;padding: 2px 3px 3px 4px')
      tab_data1.innerHTML = data[c].state;
      row.appendChild(tab_data1);
      
      let tab_data2 = document.createElement('td');
      tab_data2.setAttribute('style', 'border: 1px solid #ddd;padding: 15px; background: #FFF;border-bottom: none;border-left: none; border-right: 1px solid #CCC;border-top: 1px solid #DDD;padding: 2px 3px 3px 4px')
      tab_data2.innerHTML = data[c].cases;
      row.appendChild(tab_data2);
     
      let tab_data3 = document.createElement('td');
      tab_data3.setAttribute('style', 'border: 1px solid #ddd;padding: 15px; background: #FFF;border-bottom: none;border-left: none; border-right: 1px solid #CCC;border-top: 1px solid #DDD;padding: 2px 3px 3px 4px')
      tab_data3.innerHTML = data[c].todayCases;
      row.appendChild(tab_data3);
     
      let tab_data4 = document.createElement('td');
      tab_data4.setAttribute('style', 'border: 1px solid #ddd;padding: 15px; background: #FFF;border-bottom: none;border-left: none; border-right: 1px solid #CCC;border-top: 1px solid #DDD;padding: 2px 3px 3px 4px')
      tab_data4.innerHTML = data[c].deaths;
      row.appendChild(tab_data4);
      
      let tab_data5 = document.createElement('td');
      tab_data5.setAttribute('style', 'border: 1px solid #ddd;padding: 15px; background: #FFF;border-bottom: none;border-left: none; border-right: 1px solid #CCC;border-top: 1px solid #DDD;padding: 2px 3px 3px 4px')
      tab_data5.innerHTML = data[c].active;
      row.appendChild(tab_data5);

      localStorage.setItem("data", data[c].active);
     // console.log(data)
      
      tab_body.appendChild(row);
      
      table.appendChild(tab_body);
      document.body.appendChild(table);
    }
    console.log(data[0].state);
    window.localStorage.setItem('datas', JSON.stringify(data[0]));
  })
 