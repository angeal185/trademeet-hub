const https = require('https'),
fs = require('fs');

function add_user(data, cb){
  data = JSON.parse(data);
  let sel = data.type;
  if(sel !== 'developer' && sel !== 'entrepeneur'){
    return cb('invalid user type')
  }

  fs.readFile('./api/hub.json', 'utf8', function(err,res){
    if(err){return cb(err)}
    res = JSON.parse(res);

    for (let i = 0; i < res.length; i++) {
      if(res[i][0] === data.user){
        return cb('user already exists');
      }
    }
    
    data.date = Date.now();
    res.push([data.user, data.type]);
    fs.writeFile('./api/hub.json', JSON.stringify(res), function(err){
      if(err){return cb(err)}
      fs.readFile('./api/'+ data.type +'/db.json', 'utf8', function(err,res){
        if(err){return cb(err)}
        let obj = {
          user: data.user,
          skills: []
        }

        for (let i = 0; i < data.skills.length; i++) {
          // body...
        }

      })


    })
  })
}

function remove_user(data){

}

module.exports = { add_user, remove_user }
