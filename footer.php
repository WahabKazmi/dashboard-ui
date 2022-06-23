<footer class="footer">
    
</footer>
</main>
<script async src="./build/js/all.js"></script>

</body>

</html>
<?php
$ob_get_clean_css = ob_get_clean();
$cssmain  = preg_replace(array('/ {2,}/', '/<!--.*?-->|\t|(?:\r?\n[ \t]*)+/s'), array(' ', ''), $ob_get_clean_css);
echo $cssmain;
?>