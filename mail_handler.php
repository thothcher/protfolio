  
  <html>
   
   <head>
      <title>Sending HTML email using PHP</title>
   </head>
   
   <body>
        
    <?php 
        sleep(4);
        if(isset($_POST['submit'])){
        $to = "vakhtangisvhiligi@gmail.com"; // this is your Email address 9aac1e771930a5841b22030c597e68d5
        $from = $_POST['email']; // this is the sender's Email address
        $budget = $_POST['budget'];
        $first_name = $_POST['first_name'];
        $subject = "New Client Message";
        $message = $first_name . " with the budget: ". $budget . " " . " wrote the following:" . "\n\n" . $_POST['message'] . " \n\n here's the email: \n " . $from ;

        $headers = "From:" . $from;
        mail($to,$subject,$message,$headers);
        header('Location: index.html');
        }
        else {
            echo "<script type='text/javascript'>alert('something went wrong, please try sending the mail again.');</script>";
        }
        
?> 


      
</body>
</html>
