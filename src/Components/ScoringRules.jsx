import React, { Component } from 'react';
import '../CSS/ScoringRules.css'
import object1 from '../Assets/Images/object1.png'


import { Divider } from 'antd';
class ScoringRules extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="card ScoringRules">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <h5 className="h5">SCORING RULES</h5>
            </div>
            
            </div>

            <div className="row table">
            
            
            
            
            <table class="table table-striped table-bordered">
  
  <tbody className="tableData">
    <tr>
     
    <th scope="row" style={{fontWeight:"bold"}}>Passing</th>
    <th scope="row" style={{fontWeight:"bold"}}>Rushing</th>
      
      
    </tr>
    <tr>
      
      <td style={{fontWeight: "100",fontSize:"16px"}}>Passing Yards (PY)    <span style={{float:"right"}}>0.04 </span></td>
      <td style={{fontWeight: "100",fontSize:"16px"}}>Rushing Yards (RY)   <span style={{float:"right"}}>0.1 </span></td>
      
      
    </tr>
    
    <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> TD Pass (PTD)   <span style={{float:"right"}}>4 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> TD Rush (RTD) <span style={{float:"right"}}> 6</span></td>
    
    
  </tr>

  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> Interceptions Thrown (INT)   <span style={{float:"right"}}> -2</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>2pt Rushing Conversion (2PR)  <span style={{float:"right"}}> 2</span></td>
    
    
  </tr>

  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>2pt Passing Conversion (2PC)    <span style={{float:"right"}}>2 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
    
    
  </tr>


  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>    <span style={{float:"right"}}> </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
    
    
  </tr>

  <tr>
     
    <th scope="row" style={{fontWeight:"bold"}}>Receiving</th>
    <th scope="row" style={{fontWeight:"bold"}}>Kicking</th>
      
      
    </tr>

  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>Receiving Yards (REY) <span style={{float:"right"}}>0.1 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> Each PAT Made (PAT) <span style={{float:"right"}}> 1</span></td>
    
    
  </tr>

  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>Each reception (REC) <span style={{float:"right"}}> 1</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> Total FG Missing (FGM) <span style={{float:"right"}}>-1 </span></td>
    
    
  </tr>
  

  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> TD Reception (RETD)<span style={{float:"right"}}>6 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  FG Made (0-39 yards) (FG0)<span style={{float:"right"}}> 3</span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>2pt Receiving Conversion (2RPE) <span style={{float:"right"}}>2 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> FG Made (40-49 yards) (FG40) <span style={{float:"right"}}>4 </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> <span style={{float:"right"}}> </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> FG Made (50-59 yards) (FG50) <span style={{float:"right"}}> 5</span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> <span style={{float:"right"}}> </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  FG Made (60+ yards) (FG60)<span style={{float:"right"}}> 6</span></td>
    
    
  </tr>
  




  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> <span style={{float:"right"}}> </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
    
    
  </tr>

  <tr>
     
    <th scope="row" style={{fontWeight:"bold"}}>Team Defence / Special Teams</th>
    <th scope="row" style={{fontWeight:"bold"}}>Miscellaneous</th>
      
      
    </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> Kickoff Return TD (KRTD)<span style={{float:"right"}}> 6</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> Kickoff Return TD (KRTD) <span style={{float:"right"}}> 6</span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> Punt Return TD (PRTD)<span style={{float:"right"}}> 6</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> Punt Return TD (PRTD) <span style={{float:"right"}}>6 </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> Interception Return TD (INTTD)<span style={{float:"right"}}>6 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> Fumble Recovered for TD (FTD) <span style={{float:"right"}}> 6</span></td>
    
    
  </tr>
  
 
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>Fumble Return TD (FRTD) <span style={{float:"right"}}>6 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  Total Fumbles Lost (FUML)<span style={{float:"right"}}>-2 </span></td>
    
    
  </tr>

  <tr>
      
  <td style={{fontWeight: "100" ,fontSize:"16px"}}>Blocked Punt or FG return for TD (BLKKRTD) <span style={{float:"right"}}>6 </span></td>
  <td style={{fontWeight: "100",fontSize:"16px"}}> Interception Return TD (INTTD) <span style={{float:"right"}}>6 </span></td>
  
  
</tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> 2pt Return (2PTRET)<span style={{float:"right"}}> 2</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> Fumble Return TD (FRTD) <span style={{float:"right"}}> 6</span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> 1pt Safety (1PSF)<span style={{float:"right"}}>1 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> Blocked Punt or FG return for TD (BLKKRTD) <span style={{float:"right"}}>6 </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>Each Sack (SK) <span style={{float:"right"}}>1 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> 2pt Return (2PTRET) <span style={{float:"right"}}>2 </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> Blocked Punt, PAT or FG (BLKK)<span style={{float:"right"}}> 2</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}> 1pt Safety (1PSF) <span style={{float:"right"}}>1 </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>Each Interception (INT) <span style={{float:"right"}}>2 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> Each Fumble Recovered (FR)<span style={{float:"right"}}>2 </span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}>Each Safety (SF) <span style={{float:"right"}}> 2</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> 0 points allowed (PA0)<span style={{float:"right"}}> 5</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
    
    
  </tr>
  
  <tr>
      
    <td style={{fontWeight: "100" ,fontSize:"16px"}}> 1-6 points allowed (PA1)<span style={{float:"right"}}> 4</span></td>
    <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
    
    
  </tr>

  <tr>
      
  <td style={{fontWeight: "100" ,fontSize:"16px"}}> 7-13 points allowed (PA7)<span style={{float:"right"}}> 3</span></td>
  <td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>
  
  
</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}>14-17 points allowed (PA14) <span style={{float:"right"}}>1 </span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}>28-34 points allowed (PA28) <span style={{float:"right"}}> -1</span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}> 35-45 points allowed (PA35)<span style={{float:"right"}}>-3 </span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}>46+ points allowed (PA46) <span style={{float:"right"}}> -5</span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}> Less than 100 total yards allowed (YA100)<span style={{float:"right"}}> 5</span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}>100-199 total yards allowed (YA199) <span style={{float:"right"}}>3 </span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}> 200-299 total yards allowed (YA299)<span style={{float:"right"}}>2 </span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}>350-399 total yards allowed (YA399) <span style={{float:"right"}}>-1 </span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}>400-449 total yards allowed (YA449) <span style={{float:"right"}}>-3 </span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}>450-499 total yards allowed (YA499) <span style={{float:"right"}}> -5</span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}> 500-549 total yards allowed (YA549)<span style={{float:"right"}}>-6 </span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>

<tr>
      
<td style={{fontWeight: "100" ,fontSize:"16px"}}>550+ total yards allowed (YA550) <span style={{float:"right"}}>-7 </span></td>
<td style={{fontWeight: "100",fontSize:"16px"}}>  <span style={{float:"right"}}> </span></td>


</tr>


  

  </tbody>
</table>
            
            </div>

  {/*<LeagueScheduleResults/>

            <ViewRoasters/>
            <MyTeam/>

            <br/>
        <RecentScores/>*/}
            </div>
          
          
         );
    }
}
 
export default ScoringRules;