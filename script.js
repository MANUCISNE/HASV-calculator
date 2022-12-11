<script type="text/javascript">

    // create a formula that calculate the result of Hand Arm Vibration Syndrome
    // the formula is: 10 * duration * output / 60
    // duration is in minutes
    // output is in m/s2
    // the result is in m/s2
    // the result is rounded to the nearest integer


    const element = document.getElementById("myBtn");


    element.addEventListener("click",  function() {
        const maxPoints = 400
    const maxHours = 8
    
    let output = document.getElementById("input-output").value;
    let duration =  document.getElementById("input-output-time").value;
    let durationInHours = duration / 60;
    let points = (output * output * 2)
    let partialResult = points * durationInHours;
 
    //create a variable to store the result of rule of 3 using max points and partial result
    let result_percentage = (maxPoints * partialResult) / maxHours;
    //round the result to the nearest integer and transform in %
    let roundedResult = Math.round(result_percentage)/100;

    let result = maxPoints/points // result in hours

      
      let label =  document.getElementById("resultado");
      let label_points =  document.getElementById("points");
      let label_maxToWork = document.getElementById("maxToWork");

    label.innerHTML = `Result: ${roundedResult/2} % of 100%`;
    label_points.innerHTML = `Points: ${partialResult}`;
    label_maxToWork.innerHTML = `Max Hours to Work: ${result} hours`;

    //   if (hoursCalculated > maxHours)
    //   {
    //     label.style.color = '#FF0000';
    //   }
    //   else
    //   {
    //     label.style.color = '#2ECC71';
    //   }

    });
    
    </script>