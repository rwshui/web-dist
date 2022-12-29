import{bz as s}from"./index.56603356.js";const r="Backup",n="Restore",i="Start backup",a="Finish backup",d="[ {{item}} ] Backup was successful",c="[ {{item}} ] Backup failed",l="No file selected",_="Start restore",p="Finish restore",u="[ {{item}} ] Restore was successful",h="[ {{item}} ] Restore failed",g={backup:r,restore:n,start_backup:i,finish_backup:a,success_backup_item:d,failed_backup_item:c,no_file:l,start_restore:_,finish_restore:p,success_restore_item:u,failed_restore_item:h},m={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},rapid_upload:"Rapid upload",refresh_token:"Refresh token",root_folder_id:"Root folder id"},f={order_by:"Order by",order_bys:{created_at:"Created at",name:"Name",size:"Size",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{ASC:"ASC",DESC:"DESC"},refresh_token:"Refresh token",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd"},y={client_id:"Client id",client_secret:"Client secret",download_api:"Download api",download_apis:{crack:"Crack",official:"Official"},order_by:"Order by",order_bys:{name:"Name",size:"Size",time:"Time"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},b={album_id:"Album id",client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",show_type:"Show type",show_types:{root:"Root",root_only_album:"Root only album",root_only_file:"Root only file"}},k={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username"},w={chunk_size:"Chunk size","chunk_size-tips":"chunk size while uploading (unit: MB)",client_id:"Client id",client_secret:"Client secret",order_by:"Order by","order_by-tips":"such as: folder,name,modifiedTime",order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_id:"Root folder id"},v={client_id:"Client id",client_secret:"Client secret",refresh_token:"Refresh token",root_folder_id:"Root folder id",show_archive:"Show archive"},S={baseUrl:"BaseUrl",cookie:"Cookie","cookie-tips":"about 15 days valid",root_folder_id:"Root folder id",shareUrl:"ShareUrl",share_password:"Share password",type:"Type",types:{cookie:"Cookie",url:"Url"}},C={root_folder_path:"Root folder path",show_hidden:"Show hidden","show_hidden-tips":"show hidden directories and files",thumbnail:"Thumbnail","thumbnail-tips":"enable thumbnail"},P={access_token:"Access token",order_by:"Order by",order_bys:{size:"Size",title:"Title",updated_at:"Updated at"},order_desc:"Order desc",project_id:"Project id",root_folder_id:"Root folder id"},R={email:"Email",password:"Password"},x={chunk_size:"Chunk size",client_id:"Client id",client_secret:"Client secret",is_sharepoint:"Is sharepoint",redirect_uri:"Redirect uri",refresh_token:"Refresh token",region:"Region",regions:{cn:"Cn",de:"De",global:"Global",us:"Us"},root_folder_path:"Root folder path",site_id:"Site id"},A={password:"Password",root_folder_id:"Root folder id",username:"Username"},U={password:"Password",root_folder_id:"Root folder id",share_id:"Share id",share_pwd:"Share pwd",username:"Username"},D={cookie:"Cookie",order_by:"Order by",order_bys:{file_name:"File name",file_type:"File type",none:"None",updated_at:"Updated at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},root_folder_id:"Root folder id"},z={access_key_id:"Access key id",bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",force_path_style:"Force path style",list_object_version:"List object version",list_object_versions:{v1:"V1",v2:"V2"},placeholder:"Placeholder",region:"Region",root_folder_path:"Root folder path",secret_access_key:"Secret access key",sign_url_expire:"Sign url expire"},O={address:"Address",password:"Password",private_key:"Private key",root_folder_path:"Root folder path",username:"Username"},T={address:"Address",password:"Password",root_folder_path:"Root folder path",share_name:"Share name",username:"Username"},L={cookie:"Cookie",order_by:"Order by",order_bys:{created:"Created",fileName:"FileName",fileSize:"FileSize",updated:"Updated"},order_direction:"Order direction",order_directions:{Asc:"Asc",Desc:"Desc"},project_id:"Project id",region:"Region",regions:{china:"China",international:"International"},root_folder_id:"Root folder id"},F={captcha_token:"Captcha token",password:"Password",root_folder_id:"Root folder id",username:"Username"},j={algorithms:"Algorithms","algorithms-tips":"sign type is algorithms,this is required",captcha_sign:"Captcha sign","captcha_sign-tips":"sign type is captcha_sign,this is required",captcha_token:"Captcha token",client_id:"Client id",client_secret:"Client secret",client_version:"Client version",device_id:"Device id",download_user_agent:"Download user agent",login_type:"Login type",login_types:{refresh_token:"Refresh token",user:"User"},package_name:"Package name",password:"Password","password-tips":"login type is user,this is required",refresh_token:"Refresh token","refresh_token-tips":"login type is refresh_token,this is required",root_folder_id:"Root folder id",sign_type:"Sign type",sign_types:{algorithms:"Algorithms",captcha_sign:"Captcha sign"},timestamp:"Timestamp","timestamp-tips":"sign type is captcha_sign,this is required",use_video_url:"Use video url",user_agent:"User agent",username:"Username","username-tips":"login type is user,this is required"},M={bucket:"Bucket",custom_host:"Custom host",endpoint:"Endpoint",operator_name:"Operator name",operator_password:"Operator password",root_folder_path:"Root folder path",sign_url_expire:"Sign url expire"},B={max_file_size:"Max file size",min_file_size:"Min file size",num_file:"Num file",num_folder:"Num folder",root_folder_path:"Root folder path"},N={address:"Address",password:"Password",root_folder_path:"Root folder path",username:"Username",vendor:"Vendor",vendors:{other:"Other",sharepoint:"Sharepoint"}},E={client_id:"Client id",client_secret:"Client secret",order_by:"Order by",order_bys:{created:"Created",modified:"Modified",name:"Name",path:"Path",size:"Size"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},refresh_token:"Refresh token",root_folder_path:"Root folder path"},V={"115 Cloud":"115 Cloud","123Pan":"123Pan","139Yun":"139Yun","189Cloud":"189Cloud","189CloudPC":"189CloudPC","AList V2":"AList V2","AList V3":"AList V3",Aliyundrive:"Aliyundrive",AliyundriveShare:"AliyundriveShare",BaiduNetdisk:"BaiduNetdisk",BaiduPhoto:"BaiduPhoto",FTP:"FTP",GoogleDrive:"GoogleDrive",GooglePhoto:"GooglePhoto",Lanzou:"Lanzou",Local:"Local",MediaTrack:"MediaTrack",Mega_nz:"Mega nz",Onedrive:"Onedrive",PikPak:"PikPak",PikPakShare:"PikPakShare",Quark:"Quark",S3:"S3",SFTP:"SFTP",SMB:"SMB",Teambition:"Teambition",Thunder:"Thunder",ThunderExpert:"ThunderExpert",USS:"USS",Virtual:"Virtual",WebDav:"WebDav",YandexDisk:"YandexDisk"},G={"115 Cloud":{cookie:"Cookie",qrcode_token:"Qrcode token",root_folder_id:"Root folder id"},"123Pan":{order_by:"Order by",order_bys:{file_name:"File name",size:"Size",update_at:"Update at"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",root_folder_id:"Root folder id",stream_upload:"Stream upload",username:"Username"},"139Yun":{account:"Account",cloud_id:"Cloud id",cookie:"Cookie",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"}},"189Cloud":{password:"Password",root_folder_id:"Root folder id",username:"Username"},"189CloudPC":{family_id:"Family id",no_use_ocr:"No use ocr",order_by:"Order by",order_bys:{filename:"Filename",filesize:"Filesize",lastOpTime:"LastOpTime"},order_direction:"Order direction",order_directions:{asc:"Asc",desc:"Desc"},password:"Password",rapid_upload:"Rapid upload",root_folder_id:"Root folder id",type:"Type",types:{family:"Family",personal:"Personal"},username:"Username",validate_code:"Validate code"},"AList V2":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},"AList V3":{access_token:"Access token",password:"Password",root_folder_path:"Root folder path",url:"Url"},Aliyundrive:m,AliyundriveShare:f,BaiduNetdisk:y,BaiduPhoto:b,FTP:k,GoogleDrive:w,GooglePhoto:v,Lanzou:S,Local:C,MediaTrack:P,Mega_nz:R,Onedrive:x,PikPak:A,PikPakShare:U,Quark:D,S3:z,SFTP:O,SMB:T,Teambition:L,Thunder:F,ThunderExpert:j,USS:M,Virtual:B,WebDav:N,YandexDisk:E,drivers:V},I="Refresh",Y="Add",q="Edit",W="Save",H="Update",$="Copied",Q="Deleted successfully",K="Saved successfully",J="Updated successfully",X="Choose",Z="Confirm",ee="Cancel",oe="Are you sure you want to delete [{{name}}]?",te="Operations",se="Yes",re="No",ne="Clear",ie="Select folder",ae="Select folder or input path",de="Disable",ce="Enable",le="OK",_e="Back",pe="Have an account?",ue="Go to login",he="Close",ge="Not currently supported",me="Please enter",fe={refresh:I,add:Y,edit:q,delete:"Delete",save:W,update:H,copied:$,delete_success:Q,save_success:K,update_success:J,choose:X,confirm:Z,cancel:ee,delete_confirm:oe,operations:te,yes:se,no:re,clear:ne,choose_folder:ie,choose_or_input_path:ae,disable:de,enable:ce,ok:le,back:_e,have_account:pe,go_login:ue,close:he,no_support_now:ge,empty_input:me},ye={name:"Name",size:"Size",modified:"Modified"},be={download:"Download",failed_load_img:"Failed to load image",open_with:"Open with ...",install:"Install",installing:"Installing"},ke={list:"List View",grid:"Grid View",image:"Image View"},we="No images in the current folder",ve="Load more",Se="No more",Ce="Please input password",Pe={more:"More",refresh:"Refresh",toggle_theme:"Toggle Theme",switch_lang:"Switch Language",toggle_checkbox:"Toggle Checkbox",rename:"Rename",input_new_name:"Input new name","only_one-tips":"Only one object can be selected to rename",move:"Move",copy:"Copy",choose_dst_folder:"Select destination folder",delete:"Delete","delete-tips":"Are you sure to delete the selected object?",copy_link:"Copy link",preview_page:"Preview page",down_link:"Download link",encode_down_link:"Encode download link",mkdir:"New Folder",input_dir_name:"Input folder name",new_file:"New File",input_filename:"Input filename",cancel_select:"Cancel Select",offline_download:"Offline download","offline_download-tips":"One URL per line",download:"Download",batch_download:"Batch Download",package_download:"Package Download",package_download_disabled:"Package download is disabled",send_aria2:"Send to Aria2",aria2_not_set:"Please set aria2 rpc url",send_aria2_success:"Send to aria2 successfully","pre_package_download-tips":"Using streamsaver in the browser instead of the server for package download requires the corresponding storage to support cors, and the unsupported storage will fail.","package_download-tips":"Downloading, please wait don't close the page",upload:"Upload",local_settings:"Local Settings"},Re={add_as_task:"Add as task","upload-tips":"Drag files here to upload, or click:",release:"Release to upload",no_files_drag:"No files were dragged in.",only_files_or_one_folder:"Only files or one folder can be dragged at a time.",upload_files:"Choose Files",upload_folder:"Choose Folder",pending:"Pending",uploading:"Uploading",backending:"Uploading in the backend",success:"Success",error:"Error",back:"Back to Upload",clear_done:"Clear Done"},xe={aria2_rpc_url:"Aria2 RPC URL",aria2_rpc_secret:"Aria2 RPC secret",aria2_dir:"Aria2 download directory"},Ae={current_status:"Current Status",initializing:"Initializing",fetching_struct:"Fetching folder structure",fetching_struct_failed:"Failed to fetch folder structure",downloading:"Downloading files, don't close or refresh the page",failed:"Failed to package download",success:"Download completed"},Ue={powered_by:"Powered by AList",manage:"Manage"},De={search:"Search",no_result:"No result yet"},ze={obj:ye,preview:be,layouts:ke,no_images:we,load_more:ve,no_more:Se,input_password:Ce,toolbar:Pe,upload:Re,local_settings:xe,package_download:Ae,footer:Ue,search:De},Oe="Search index",Te="Current indexes",Le="Build indexes",Fe="Rebuild indexes",je="Paths to update",Me="Update indexes",Be="Object count",Ne="Last done time",Ee="Unknown",Ve="Stop",Ge="Clear",Ie="Error",Ye={search_index:Oe,current:Te,build:Le,rebuild:Fe,paths_to_update:je,update:Me,obj_count:Be,last_done_time:Ne,unknown:Ee,stop:Ve,clear:Ge,error:Ie},qe="Login to the",We="Remember me",He="Forget password?",$e="https://alist.nn.ci/faq/howto.html#how-to-get-password-if-i-forget-it",Qe="Clear",Ke="Login",Je="Browse as a guest",Xe="Login successfully",Ze={login_to:qe,"username-tips":"Input your username","password-tips":"Input your password","otp-tips":"Input your OTP Code",remember:We,forget:He,forget_url:$e,clear:Qe,login:Ke,use_guest:Je,success:Xe},eo={dashboard:"Dashboard",settings:"Settings",site:"Site",style:"Style",preview:"Preview",global:"Global",other:"Other",users:"Users",storages:"Storages",metas:"Metas",profile:"Profile",about:"About",tasks:"Tasks",aria2:"Aria2",upload:"Upload",copy:"Copy","backup-restore":"Backup & Restore",home:"Home",indexes:"Indexes",github:"Github"},oo="AList Manage",to="You are not admin user, please login with admin account.",so="Logout successfully",ro="Send",no="Receive",io="Received messages",ao={sidemenu:eo,title:oo,not_admin:to,logout_success:so,send:ro,receive:no,received_msgs:io,"add_storage-tips":"You may need to fill in some information in the newly opened tab.","messenger-tips":"You may need to fill in some information on this tab as prompted."},co="Path",lo="Password",_o="Write",po="Hide",uo="Readme",ho="Apply to sub folder",go="One regular expression per line",mo="Support markdown content or markdown link",fo={path:co,password:lo,write:_o,hide:po,readme:uo,apply_sub:ho,hide_help:go,readme_help:mo},yo="Allow indexed",bo="Announcement",ko="Aria2 secret",wo="Aria2 uri",vo="Audio autoplay",So="Audio cover",Co="Audio types",Po="Customize body",Ro="Customize head",xo="Default page size",Ao="External previews",Uo="Favicon",Do="Filename char mapping",zo="Github client id",Oo="Github client secrets",To="Github login enabled",Lo="Hide files",Fo="Home container",jo={hope_container:"Hope container",max_980px:"Max 980px"},Mo="Home icon",Bo="Iframe previews",No="Ignore paths",Eo="Image types",Vo="Index progress",Go="Link expiration",Io="Logo",Yo="Main color",qo="Ocr api",Wo="Package download",Ho="Pagination type",$o={all:"All",auto_load_more:"Auto load more",load_more:"Load more",pagination:"Pagination"},Qo="Privacy regs",Ko="Proxy ignore headers",Jo="Proxy types",Xo="Search index",Zo={bleve:"Bleve",database:"Database",none:"None"},et="Settings layout",ot={list:"List",responsive:"Responsive"},tt="Sign all",st="Site title",rt="Text types",nt="Token",it="Version",at="Video autoplay",dt="Video types",ct={allow_indexed:yo,announcement:bo,aria2_secret:ko,aria2_uri:wo,audio_autoplay:vo,audio_cover:So,audio_types:Co,customize_body:Po,customize_head:Ro,default_page_size:xo,external_previews:Ao,favicon:Uo,filename_char_mapping:Do,github_client_id:zo,github_client_secrets:Oo,github_login_enabled:To,hide_files:Lo,home_container:Fo,home_containers:jo,home_icon:Mo,iframe_previews:Bo,ignore_paths:No,"ignore_paths-tips":"one path per line",image_types:Eo,index_progress:Vo,link_expiration:Go,logo:Io,main_color:Yo,ocr_api:qo,package_download:Wo,pagination_type:Ho,pagination_types:$o,privacy_regs:Qo,proxy_ignore_headers:Ko,proxy_types:Jo,search_index:Xo,search_indexs:Zo,settings_layout:et,settings_layouts:ot,sign_all:tt,site_title:st,text_types:rt,token:nt,version:it,video_autoplay:at,video_types:dt},lt="Aria2",_t="Aria2 Version:",pt="Set aria2",ut="Copy Token",ht="Reset Token",gt="Reset Token Successfully",mt="Unknown type",ft={aria2:lt,aria2_version:_t,set_aria2:pt,copy_token:ut,reset_token:ht,reset_token_success:gt,unknown_type:mt},yt={start_load_success:"Start loading",load_all:"Reload All",mount_path:"Mount Path",driver:"Driver",order:"Order","order-tips":"Use to sort",status:"Status",remark:"Remark",cache_expiration:"Cache Expiration","cache_expiration-tips":"The cache expiration time for this storage(minutes)",down_proxy_url:"Download proxy URL",web_proxy:"Web proxy",webdav_policy:"WebDAV policy",webdav_policys:{"302_redirect":"302 redirect",use_proxy_url:"use proxy URL",native_proxy:"native proxy"},order_by:"Order by",order_bys:{name:"Name",size:"Size",modified:"Modified"},order_direction:"Order direction",order_directions:{asc:"Ascending",desc:"Descending"},extract_folder:"Extract folder",extract_folders:{front:"Extract to front",back:"Extract to back"}},bt={common:yt},kt="Download file to local machine",wt="Transfer downloaded file to corresponding storage",vt="Upload file to corresponding storage",St="Copy file from a storage to another storage",Ct="Completed",Pt="Running",Rt="Pending",xt="Running",At="Canceling",Ut="Succeeded",Dt="Canceled",zt="Errored",Ot={down:kt,transfer:wt,upload:vt,copy:St,done:Ct,undone:Pt,pending:Rt,running:xt,canceling:At,succeeded:Ut,canceled:Dt,errored:zt},Tt={see_hides:"Can see hides",access_without_password:"Access without password",offline_download:"Add offline download tasks",write:"Make dir or upload",rename:"Rename",move:"Move",copy:"Copy",delete:"Delete",webdav_read:"Webdav read",webdav_manage:"Webdav manage"},Lt="Username",Ft="Password",jt="Base path",Mt="Role",Bt="Permission",Nt="Update Profile",Et="Update profile successfully, please re-login.",Vt="Change Username",Gt="Change Password",It="Enable 2FA",Yt="Scan the QR code to save the secret key",qt="Input the code of your 2FA app",Wt="Verify",Ht="So you cannot modify anything in the manage page.",$t="Github Login",Qt="Connect Github",Kt="Disconnect Github",Jt={permissions:Tt,username:Lt,password:Ft,base_path:jt,role:Mt,permission:Bt,update_profile:Nt,update_profile_success:Et,change_username:Vt,change_password:Gt,"change_password-tips":"Keep the password empty if you don't want to change it",enable_2fa:It,"2fa_already_enabled":"2FA is already enabled",scan_qr:Yt,input_code:qt,verify:Wt,"guest-tips":"You are currently visiting as a guest.",modify_nothing:Ht,github_login:$t,connect_github:Qt,disconnect_github:Kt},o=Object.assign({"./br.json":g,"./drivers.json":G,"./global.json":fe,"./home.json":ze,"./index.json":s,"./indexes.json":Ye,"./login.json":Ze,"./manage.json":ao,"./metas.json":fo,"./settings.json":ct,"./settings_other.json":ft,"./storages.json":bt,"./tasks.json":Ot,"./users.json":Jt}),Xt={};for(const e in o){const t=e.split("/")[1].split(".")[0];Xt[t]=o[e]}export{Xt as default};