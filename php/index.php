<?php
function getSymbolByQuantity($bytes)
{
    $symbols = array('B', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB');
    $exp = floor(log($bytes) / log(1024));

    return sprintf('%.2f ' . $symbols[$exp], ($bytes / pow(1024, floor($exp))));
}


function getSizeDisk($namaDisk)
{
    $dts = disk_total_space($namaDisk);
    $dfs = disk_free_space($namaDisk);
    $dus = $dts - $dfs;
    return ["total" => getSymbolByQuantity($dts),"total_int" => $dts, "used" => getSymbolByQuantity($dus), "used_int" => $dus, "free" => getSymbolByQuantity($dfs), "free_int" => $dfs];
}

if(isset($_GET["partisi"])) {
    echo json_encode(getSizeDisk($_GET['partisi'].":"));
} else {
    echo json_encode(["error" => "Parameter partisi diisi ya mas"]);
}
