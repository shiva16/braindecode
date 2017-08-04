Search.setIndex({docnames:["index","notebooks/BBCI_Data","notebooks/BBCI_Data_Start_Stop","notebooks/BBCI_Data_Trialwise","notebooks/Cropped_Decoding","notebooks/Experiment_Class","notebooks/TrialWise_Decoding","notebooks/visualization/Perturbation","source/braindecode","source/braindecode.datasets","source/braindecode.datautil","source/braindecode.experiments","source/braindecode.mne_ext","source/braindecode.models","source/braindecode.torch_ext","source/braindecode.visualization","source/modules"],envversion:53,filenames:["index.rst","notebooks/BBCI_Data.ipynb","notebooks/BBCI_Data_Start_Stop.ipynb","notebooks/BBCI_Data_Trialwise.ipynb","notebooks/Cropped_Decoding.ipynb","notebooks/Experiment_Class.ipynb","notebooks/TrialWise_Decoding.ipynb","notebooks/visualization/Perturbation.ipynb","source/braindecode.rst","source/braindecode.datasets.rst","source/braindecode.datautil.rst","source/braindecode.experiments.rst","source/braindecode.mne_ext.rst","source/braindecode.models.rst","source/braindecode.torch_ext.rst","source/braindecode.visualization.rst","source/modules.rst"],objects:{"":{braindecode:[8,0,0,"-"]},"braindecode.datasets":{bbci:[9,0,0,"-"],bcic_iv_2a:[9,0,0,"-"],multiple:[9,0,0,"-"],sensor_positions:[9,0,0,"-"]},"braindecode.datasets.bbci":{BBCIDataset:[9,1,1,""],load_bbci_sets_from_folder:[9,4,1,""]},"braindecode.datasets.bbci.BBCIDataset":{get_all_sensors:[9,2,1,""],load:[9,3,1,""]},"braindecode.datasets.bcic_iv_2a":{BCICompetition4Set2A:[9,1,1,""]},"braindecode.datasets.bcic_iv_2a.BCICompetition4Set2A":{extract_data:[9,3,1,""],extract_events:[9,3,1,""],load:[9,3,1,""]},"braindecode.datasets.multiple":{MultipleSetLoader:[9,1,1,""]},"braindecode.datasets.multiple.MultipleSetLoader":{load:[9,3,1,""]},"braindecode.datasets.sensor_positions":{get_channelpos:[9,4,1,""],get_channelpos_from_angle:[9,4,1,""]},"braindecode.datautil":{iterators:[10,0,0,"-"],signal_target:[10,0,0,"-"],signalproc:[10,0,0,"-"],splitters:[10,0,0,"-"],trial_segment:[10,0,0,"-"],util:[10,0,0,"-"]},"braindecode.datautil.iterators":{BalancedBatchSizeIterator:[10,1,1,""],ClassBalancedBatchSizeIterator:[10,1,1,""],CropsFromTrialsIterator:[10,1,1,""],get_balanced_batches:[10,4,1,""]},"braindecode.datautil.iterators.BalancedBatchSizeIterator":{get_batches:[10,3,1,""],reset_rng:[10,3,1,""]},"braindecode.datautil.iterators.ClassBalancedBatchSizeIterator":{get_batches:[10,3,1,""],reset_rng:[10,3,1,""]},"braindecode.datautil.iterators.CropsFromTrialsIterator":{get_batches:[10,3,1,""],reset_rng:[10,3,1,""]},"braindecode.datautil.signal_target":{SignalAndTarget:[10,1,1,""],apply_to_X_y:[10,4,1,""]},"braindecode.datautil.signalproc":{bandpass_cnt:[10,4,1,""],exponential_running_demean:[10,4,1,""],exponential_running_standardize:[10,4,1,""],filter_is_stable:[10,4,1,""],highpass_cnt:[10,4,1,""],lowpass_cnt:[10,4,1,""]},"braindecode.datautil.splitters":{concatenate_sets:[10,4,1,""],concatenate_two_sets:[10,4,1,""],split_into_two_sets:[10,4,1,""]},"braindecode.datautil.trial_segment":{add_breaks:[10,4,1,""],create_signal_target:[10,4,1,""],create_signal_target_from_raw_mne:[10,4,1,""]},"braindecode.datautil.util":{ms_to_samples:[10,4,1,""],samples_to_ms:[10,4,1,""]},"braindecode.experiments":{experiment:[11,0,0,"-"],monitors:[11,0,0,"-"],stopcriteria:[11,0,0,"-"]},"braindecode.experiments.experiment":{Experiment:[11,1,1,""],RememberBest:[11,1,1,""]},"braindecode.experiments.experiment.Experiment":{eval_on_batch:[11,3,1,""],monitor_epoch:[11,3,1,""],print_epoch:[11,3,1,""],run:[11,3,1,""],run_one_epoch:[11,3,1,""],run_until_early_stop:[11,3,1,""],run_until_second_stop:[11,3,1,""],run_until_stop:[11,3,1,""],setup_after_stop_training:[11,3,1,""],setup_training:[11,3,1,""],train_batch:[11,3,1,""]},"braindecode.experiments.experiment.RememberBest":{remember_epoch:[11,3,1,""],reset_to_best_model:[11,3,1,""]},"braindecode.experiments.monitors":{AveragePerClassMisclassMonitor:[11,1,1,""],CroppedTrialMisclassMonitor:[11,1,1,""],LossMonitor:[11,1,1,""],MisclassMonitor:[11,1,1,""],RuntimeMonitor:[11,1,1,""],compute_preds_per_trial_for_set:[11,4,1,""],compute_preds_per_trial_from_n_preds_per_trial:[11,4,1,""]},"braindecode.experiments.monitors.AveragePerClassMisclassMonitor":{monitor_epoch:[11,3,1,""],monitor_set:[11,3,1,""]},"braindecode.experiments.monitors.CroppedTrialMisclassMonitor":{monitor_epoch:[11,3,1,""],monitor_set:[11,3,1,""]},"braindecode.experiments.monitors.LossMonitor":{monitor_epoch:[11,3,1,""],monitor_set:[11,3,1,""]},"braindecode.experiments.monitors.MisclassMonitor":{monitor_epoch:[11,3,1,""],monitor_set:[11,3,1,""]},"braindecode.experiments.monitors.RuntimeMonitor":{monitor_epoch:[11,3,1,""],monitor_set:[11,3,1,""]},"braindecode.experiments.stopcriteria":{And:[11,1,1,""],ColumnBelow:[11,1,1,""],MaxEpochs:[11,1,1,""],NoDecrease:[11,1,1,""],Or:[11,1,1,""]},"braindecode.experiments.stopcriteria.And":{should_stop:[11,3,1,""]},"braindecode.experiments.stopcriteria.ColumnBelow":{should_stop:[11,3,1,""]},"braindecode.experiments.stopcriteria.MaxEpochs":{should_stop:[11,3,1,""]},"braindecode.experiments.stopcriteria.NoDecrease":{should_stop:[11,3,1,""]},"braindecode.experiments.stopcriteria.Or":{should_stop:[11,3,1,""]},"braindecode.mne_ext":{signalproc:[12,0,0,"-"]},"braindecode.mne_ext.signalproc":{concatenate_raws_with_events:[12,4,1,""],mne_apply:[12,4,1,""],resample_cnt:[12,4,1,""]},"braindecode.models":{deep4:[13,0,0,"-"],eegnet:[13,0,0,"-"],shallow_fbcsp:[13,0,0,"-"],util:[13,0,0,"-"]},"braindecode.models.deep4":{Deep4Net:[13,1,1,""]},"braindecode.models.deep4.Deep4Net":{create_network:[13,3,1,""]},"braindecode.models.eegnet":{EEGNet:[13,1,1,""]},"braindecode.models.eegnet.EEGNet":{create_network:[13,3,1,""]},"braindecode.models.shallow_fbcsp":{ShallowFBCSPNet:[13,1,1,""]},"braindecode.models.shallow_fbcsp.ShallowFBCSPNet":{create_network:[13,3,1,""]},"braindecode.models.util":{to_dense_prediction_model:[13,4,1,""]},"braindecode.torch_ext":{constraints:[14,0,0,"-"],functions:[14,0,0,"-"],init:[14,0,0,"-"],losses:[14,0,0,"-"],modules:[14,0,0,"-"],util:[14,0,0,"-"]},"braindecode.torch_ext.constraints":{MaxNormDefaultConstraint:[14,1,1,""]},"braindecode.torch_ext.constraints.MaxNormDefaultConstraint":{apply:[14,3,1,""]},"braindecode.torch_ext.functions":{identity:[14,4,1,""],safe_log:[14,4,1,""],square:[14,4,1,""]},"braindecode.torch_ext.init":{glorot_weight_zero_bias:[14,4,1,""]},"braindecode.torch_ext.losses":{l1_loss:[14,4,1,""],l2_loss:[14,4,1,""],log_categorical_crossentropy:[14,4,1,""]},"braindecode.torch_ext.modules":{Expression:[14,1,1,""]},"braindecode.torch_ext.modules.Expression":{forward:[14,3,1,""]},"braindecode.torch_ext.util":{np_to_var:[14,4,1,""],set_random_seeds:[14,4,1,""],var_to_np:[14,4,1,""]},"braindecode.util":{FuncAndArgs:[8,1,1,""],add_message_to_exception:[8,4,1,""],corr:[8,4,1,""],cov:[8,4,1,""],dict_compare:[8,4,1,""],dict_equal:[8,4,1,""],dict_is_subset:[8,4,1,""],merge_dicts:[8,4,1,""],mkdir_p:[8,4,1,""],select_inverse_inds:[8,4,1,""],to_tuple:[8,4,1,""],touch_file:[8,4,1,""],wrap_reshape_apply_fn:[8,4,1,""]},"braindecode.util.FuncAndArgs":{apply:[8,3,1,""]},"braindecode.visualization":{perturbation:[15,0,0,"-"]},"braindecode.visualization.perturbation":{compute_amplitude_prediction_correlations:[15,4,1,""],gaussian_perturbation:[15,4,1,""]},braindecode:{datasets:[9,0,0,"-"],datautil:[10,0,0,"-"],experiments:[11,0,0,"-"],mne_ext:[12,0,0,"-"],models:[13,0,0,"-"],torch_ext:[14,0,0,"-"],util:[8,0,0,"-"],visualization:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","staticmethod","Python static method"],"3":["py","method","Python method"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:staticmethod","3":"py:method","4":"py:function"},terms:{"0x7f274f3b7950":[],"0x7f2755797410":[],"0x7f275595cbd0":[],"0x7f2755a4bcd0":[],"0x7fa3140df828":[],"0x7fa3159c5a58":[],"0x7fa35a4092b0":[],"162cf84dd5fb":[],"1_250hz":2,"1darrai":10,"1e6":[4,5,6,7],"2bbci":[1,3],"2darrai":[1,3,8,10,11],"3darrai":[6,10],"3rd":10,"500m":10,"break":[2,10],"case":[1,3,5,8,9,10,11],"class":[0,1,2,3,4,6,7,8,9,10,11,13,14],"default":15,"final":[1,3,4,10,14],"float":[4,6,7,9,10,11,12],"function":[4,5,6,7,8,10,11,12,13,15,16],"import":[1,2,3,4,5,6,7],"int":[2,8,9,10,11,13,14,15],"new":[1,2,3,4,5,6,7,8,12,14],"return":[2,4,5,6,7,8,9,10,11,12,14,15],"static":9,"true":[1,2,3,4,5,6,7,11,13],"try":6,"var":14,"while":[1,2,3],Adding:2,And:11,But:[1,3],For:[0,4,6,7,10,15],The:[2,4,5,6,7,8,9,10,11],Then:10,There:[1,3],These:4,Use:[4,5,6],Useful:8,Using:0,With:2,abl:5,about:7,abs:7,absolut:10,accept:[4,5,12,14,15],accord:[5,11],account:11,accuraci:[1,2,4,5,6,7],achiev:6,across:[4,7,14],activ:[4,7],adam:[1,2,3,4,5,6,7],add:[2,6,10,11,15],add_break:[2,10],add_message_to_except:8,addition:4,additional_messag:8,advis:2,af3:9,af4:9,af7:9,af8:9,aff1:9,aff2:9,aff5h:9,aff6h:9,afp3h:9,afp4h:9,after:[5,6,10,11],afz:9,again:[7,10],aggreg:4,aim:[],all:[1,2,3,4,6,7,9,10,11,14,15],all_batch_s:11,all_loss:[4,7,11],all_pr:[4,7,11],all_target:11,allclos:[],allow:10,alpha:7,alreadi:2,also:[1,2,3,4,5,6,7,9,10,12],alwai:2,amar:[4,5,6,7],amp:15,amp_pred_corr:7,amplitud:[0,15],amplitude_phase_to_complex:[],amplitude_pred_corr:15,angl:9,ani:[0,1,3,4,6,8],anla:2,anlanbd1r01:2,anlanbd1r09:2,anlanbd1s001r01_1:2,anlanbd1s001r02_1:2,anlanbd1s001r03_1:2,anlanbd1s001r09_1:2,anlanbd1s001r10_1:2,anoth:[6,8],anyth:5,append:[2,4,7],appli:[1,2,3,5,8,10,11,12,14],applic:10,apply_to_x_i:10,approxim:7,architectur:[6,13],archiv:[4,5,6,7],arg:8,argmax:[4,6,7],argument:[1,3,8],arr:8,arrai:[1,2,3,4,7,8,10,12,14,15],arriv:[1,2,3,4,5,6],arxiv:[13,14,15],asarrai:14,asctim:[1,2,3,5,7],assert:[],assign:[4,10],assum:[9,11],astyp:[4,5,6,7],attribut:[6,10,12],augment:11,author:13,auto:[1,3,4,5,6,7,13],autograd:[11,14],autoreload:[],avail:[1,2,3,4,5,6,7],averag:11,averageperclassmisclassmonitor:11,ax_scalp:7,axes:[7,13],axi:[2,4,6,7,8,10,13,15],axis_a:8,axis_b:8,back:[1,2,3,8],background:[4,7],backpropag:6,backward:[4,6,7],bad:[4,5,6,7],balanc:10,balancedbatchsizeiter:[1,3,10],ball:[9,13,14,15],band:7,bandpass:10,bandpass_cnt:10,bandpassed_data:10,base:[8,9,10,11,13,14],baselin:[4,5,6,7],basicconfig:[1,2,3,5,7],batch:[4,6,7,10,11,14,15],batch_i:[4,6,7],batch_modifi:[1,2,3,5,11],batch_norm:13,batch_norm_alpha:13,batch_siz:[1,2,3,4,5,6,7,10,15],batch_x:[4,6,7],bbci:[8,16],bbcidataset:[1,3,9],bbcidatasetnew:[],bbcidatasetold:[],bci2000:[4,5,6,7],bci:[4,5,6,7],bcic_iv_2a:[8,16],bcicompetition4set2a:9,been:13,befor:[2,5,10,11],begin:[4,5,6],being:10,below:[2,4,5,6,11],best:[1,2,3,5,11],best_epoch:11,between:[6,7,8,15],bhnomosc1s001r01_ds10_1:[1,3],bhnomosc1s001r13_ds10_1:[1,3],bias:14,bilinear:9,bin:15,biomed:[4,5,6,7],birbaum:[4,5,6,7],bit:2,bool:[9,10,11,12,14],both:[4,5,6,14],brain:[4,5,6,7,13],braindecod:[1,2,3],braindevel:[],break_start_cod:[2,10],break_start_offset_m:2,break_stop_cod:[2,10],break_stop_offset_m:2,buk6i87:9,butterworth:10,calcul:9,call:[1,3,8],can:[1,2,3,4,5,6,7,8,10,11,13],cannot:2,captur:7,categor:14,causal:[1,3,10],cc671def285f:[],ccp1h:9,ccp2h:9,ccp3h:9,ccp4h:9,ccp5h:9,ccp6h:9,ch_name:7,chan:[1,2,3],chan_pos_list:[7,9],chang:[1,6,11,15],channam:9,channel:[1,2,3,4,5,6,7,9,10,11,12],channel_10_20:9,channel_10_20_approx:[7,9],character:[4,5,6,7],check:[9,10,13],check_class_nam:9,circul:[4,5,6,7],class_nam:7,classbalancedbatchsizeiter:10,classifi:[6,7],classnam:10,clearli:7,clone:0,close:6,cluster:[],cmap:7,cnt:[1,2,3,12],cnt_new:[],cnt_old:[],cnt_signal:[],code:[1,2,3,4,5,6,9,10],coeffici:10,col_suffix:[1,2,3,5,11],collect:[1,2,3,4,7],column:11,column_nam:11,columnbelow:11,com:[0,8,9,10],combin:[2,4,5,7,11],come:[5,6],common:[6,9],commun:[4,5,6,7],compact:13,complet:11,complex:[4,5,6,7],complic:2,compon:[4,5,6,7],comput:[4,5,6,8,10,11,13,14,15],compute_amplitude_prediction_correl:[7,15],compute_preds_per_trial_for_set:[4,7,10,11],compute_preds_per_trial_from_n_preds_per_tri:11,concaten:[4,5,6,7,10,12],concatenate_raw:[4,5,6,7,12],concatenate_raws_with_ev:12,concatenate_set:[2,10],concatenate_two_set:10,concatenated_raw:12,concatenated_set:10,constraint:[5,8,11,16],construct:[],constructor:14,contain:[2,8,10,11],context:4,continu:[5,10,11,12],contour:7,contribut:[4,5,6,7],conv_nonlin:13,conveni:[5,11,14],convent:6,convert:14,convnet:[1,2,3,4,5,6,7,10,11,13,15],convolut:[0,4,6,7,13,14,15],coolwarm:7,copi:[2,8,12],corr:8,correct:13,correctli:[4,6,12],correl:[8,15],could:5,count:11,counter:[1,2,3,11],cov:8,covari:8,cp1:9,cp2:9,cp3:9,cp4:9,cp5:9,cp6:9,cpp1h:9,cpp2h:9,cpp3h:9,cpp4h:9,cpp5h:9,cpp6h:9,cpu:[1,2,4,5,7,14],cpz:[1,2,3,9],creat:[8,9,10,15],create_cnt:2,create_network:[1,2,3,4,5,6,7,13],create_signal_target:10,create_signal_target_from_raw_mn:[1,2,3,10],creation:12,criteria:11,criterion:[5,11],crop:[0,1,2,3,5,6,7,10,11],croppedtrialmisclassmonitor:[1,2,3,5,11],cropsfromtrialsiter:[1,2,4,5,7,10],cross:[6,7],crossentropi:14,cuda:[1,2,3,4,5,6,7,11,14],cut:2,data:[0,10,11,12],databas:[],datafram:11,dataset:[2,8,10,11,16],datautil:[1,2,3,4,5,6,7,8,16],debug:[1,2,3,5,7],decod:[0,7,13,14,15],decreas:[5,11],deep4:[7,8,16],deep4net:[7,13],deep:[0,4,6,7,13,14,15],deepcopi:2,def:2,deman:10,demean:10,demeanin:10,demonstr:6,denomin:10,dens:[4,13],depend:3,descent:6,describ:[4,5,6,7],descript:13,detail:15,detect:[],determin:[1,2,3,4,5,6,7,10],develop:[4,5,6,7],deviat:[],dict:[4,5,6,7,8,10],dict_arg:8,dict_compar:8,dict_equ:8,dict_is_subset:8,dictionari:[1,3,10,11],differ:[4,10],digit:[4,5,6,7],dilat:[4,13],dim:[1,2,4,5,7,14],dimens:[6,10],direct:[1,3],divis:10,divisor:[4,10],doe:[10,12],doesn:[],domain:[0,6],don:[0,4,5,6],done:[6,7,14],double_time_conv:13,down:9,download:[4,5,6],drop:[4,5,6],drop_channel:[1,2,3],drop_prob:13,dtype:[1,2,4,5,7,14],dummi:4,dure:10,e215:[4,5,6,7],e220:[4,5,6,7],each:[4,5,6,7,10,11],earli:11,edf:[],eeg:[0,4,5,6,7,13,14,15],eeg_channel_ind:[4,5,6],eegbci:[4,5,6,7],eegdeeplearn:15,eegmmidb:[],eegnet:[8,16],eggensperg:[13,14,15],either:[1,3,8,10,13],elu:13,empti:6,encod:11,end:2,ensur:6,entir:6,eog:[4,5,6,7],epoch:[2,4,5,6,7,10,11],epoch_ival_m:10,epoched_test:[6,7],epochs_df:11,eponenti:2,eps:[1,2,3,10,14],especi:15,etc:[2,4,10],eval:[4,6,7],eval_on_batch:11,evalu:[4,5,10,11],event:[2,4,5,6,7,10,12],event_cod:[4,5,6],events_test:[6,7],eventu:[4,6],everyth:5,exampl:[1,3,6,7,9,14,15],examplewis:11,exc:8,exclud:[4,5,6,7],execut:[4,5,6],exist:[2,9],exp:[1,2,3,5],expand_dim:[],expect:[1,2,3,4,5,6],experi:[0,4,7,8,10,16],explain:4,exponent:10,exponenti:10,exponential_running_demean:10,exponential_running_standard:[1,2,3,10],express:[1,2,3,5,14],expression_fn:14,extens:[12,14],extract:[4,5,6],extract_data:9,extract_ev:9,factor_new:[1,2,3,10],fals:[4,5,6,7,9,13,14],far:11,fc1:9,fc2:9,fc3:9,fc4:9,fc5:9,fc6:9,fcc1h:9,fcc2h:9,fcc3h:9,fcc4h:9,fcc5h:9,fcc6h:9,fcz:9,featur:8,feel:5,feet:[1,2,3,4,5,6,7],few:[1,3],ffc1h:9,ffc2h:9,ffc3h:9,ffc4h:9,ffc5h:9,ffc6h:9,fft7h:9,fft8h:9,fft:7,fieder:[13,14,15],field:[1,2,3,4,5,7,10],fig:7,figsiz:[],figur:[],file:[4,5,6,9],filenam:[1,3,9],filt_ord:10,filter:10,filter_is_st:10,filter_length_2:13,filter_length_3:[7,13],filter_length_4:[7,13],filter_time_length:13,final_conv_length:[1,2,3,4,5,6,7,13],find:[4,5,6],find_ev:[4,5,6,7],first:[1,2,3,4,5,6,7,10,11,15],first_nonlin:13,first_pool_mod:13,first_pool_nonlin:13,first_set:10,first_set_fract:[1,2,3,5,10],fist:[],float32:[1,2,4,5,6,7],float64:[1,2,3],focuss:0,folder:[2,9],follow:[1,5,6,11],fontsiz:[],foo:9,format:[1,2,3,7],forth:[1,2,3],forward:[10,14],found:[2,4,5,6],fourth:6,fp1:9,fp2:9,fpz:9,fraction:10,free:5,freiburg:9,freq:7,freq_corr:7,frequenc:[7,9,10,15],from:[0,1,2,3,4,5,6,7,8,9,10,11,13,14],ft10:9,ft7:9,ft8:9,ft9:9,ftt10h:9,ftt7h:9,ftt8h:9,ftt9h:9,fulfil:[5,11],func:[8,12],funcandarg:8,further:[4,5,6,7],futur:[1,3],gaussian:15,gaussian_perturb:15,gener:[4,5,6,7,15],germani:9,get:[4,6,7,9,10],get_all_sensor:9,get_balanced_batch:[6,10],get_batch:[4,7,10],get_channelpo:[7,9],get_channelpos_from_angl:9,get_data:[2,4,5,6,7],getlogg:[1,2,3],git:0,github:0,give:[1,3,4,7],given:[5,8,9,10,11,12,14],glass:[4,5,6,7],glasstett:[13,14,15],glorot:14,glorot_weight_zero_bia:14,goe:8,goldberg:[4,5,6,7],gordon:13,gpu:[1,2,3,4,5,6,7,14],gradient:[4,6,7],great:2,grow:[4,5,6,7],guarante:13,h5file:[],h5py:[],hall:2,hand:[2,4,5,6,7],happen:5,has:[1,2,3,4,6,11,13],hausdorff:[4,5,6,7],have:[1,2,3,4,5,6,10,11],help:[9,10],here:[2,4,6,7],high_cut_hz:10,higher:6,highli:11,highpass:10,highpass_cnt:10,highpassed_data:10,hinterberg:[4,5,6,7],home:[1,2,3],hot:11,how:[1,2,3,4,5,6,7],html:9,http:[0,8,9,10],human:[],hung:13,hyri:10,i_class:7,i_epoch:[4,6,7],i_start:7,i_stop:7,i_trial:6,i_trials_in_batch:6,ident:[4,7,13,14],ieee:[4,5,6,7],ignor:5,iir:10,imageri:[6,7],imagin:[4,5,6,7],imbalanc:11,implement:13,impli:7,import_export:9,importerror:[],in_chan:[1,2,3,4,5,6,7,13],includ:[10,11],increas:[7,10],ind:8,index:[0,10,11],indic:[2,10,11],individu:9,infinit:[5,11],info:[1,2,3,4,5,6,7,12],inform:[],init:[8,16],init_block_s:[1,2,3,10],initi:[11,14],inlin:7,inplac:12,input:[1,2,4,5,6,7,10,11,14,15],input_time_length:[1,2,3,4,5,6,7,10,11,13],insensit:9,insert:13,insid:9,instanc:8,instead:[1,4,13],instrument:[4,5,6,7],int64:[4,5,6,7],interest:6,interfac:[4,5,6,7,13],intermedi:13,interpol:9,interpret:7,interv:10,invalid:9,ipython:[],is_avail:[1,2,3,4,5,6,7],is_stabl:10,issu:0,iter:[5,6,8,11,14,15,16],its:[8,11,14],itself:[1,3],ivanov:[4,5,6,7],just:[1,2,3],keepdim:[],kei:[8,10],kind:9,know:[2,4],known:9,kwarg:8,l1_loss:14,l2_loss:14,lab:9,label:[4,5,6,10],labels_filenam:9,lambda:[1,2,3,5,7],lan:[4,5,6,7],lanc:13,larg:[4,5,6,7],largest:10,last:[1,3,4,6,7],later:[2,6,7],later_nonlin:13,later_pool_mod:13,later_pool_nonlin:13,latter:8,lawhern:13,layer:[4,14],lead:10,learn:[0,4,6,7,13,14,15],least:[4,7],left:[1,3,6,7],len:[4,6,7],length:[4,8,10,11],let:2,level:[1,2,3,5,7],levelnam:[1,2,3,5,7],lfilter:10,librari:[6,12],like:[1,3,6,11],likelihood:[4,7],line2d:[],line:[],list:[1,3,4,7,8,9,10,11,12,14],load:9,load_bbci_sets_from_fold:[2,9],load_data:[4,5,6,7],load_ext:[],load_sensor_nam:[1,3,9],loader:9,log:[4,5,7,12,14],log_categorical_crossentropi:14,logarithm:14,logpr:14,look:6,lookup:9,loop:5,loss:[4,5,6,7,8,11,16],loss_funct:[1,2,3,5,11],lossmonitor:[1,2,3,5,11],low:[5,11],low_cut_hz:10,lowest:[9,11],lowpass:[2,10],lowpass_cnt:[2,10],lowpassed_data:10,machin:[1,2,3,4,5,6,7],make:[4,5,6,7,9,10,11],mani:[1,2,3,4,5,6,7,11],manipul:10,manual:4,map:[1,3,10,11],mark:[4,5,6,7],marker:[1,3,10],mat:[1,2,3,9],match:[4,5,6,9],mathwork:9,matlab:9,matplotlib:7,matrix:[1,3],matter:10,max:[7,8,13,14],max_abs_v:7,max_break_length_m:[2,10],max_epoch:11,maxepoch:[1,2,3,5,11],maximum:10,maxnormdefaultconstraint:14,mcfarland:[4,5,6,7],mean:[1,2,4,5,6,7,9,10,11,13],mean_corr:7,meaned_preds_per_tri:[4,7],med:[],median:[],median_absolute_devi:[],meg:[4,5,6,7],merg:8,merge_dict:8,messag:[1,2,3,5,7],method:[4,5,8,9,11],mietu:[4,5,6,7],might:[6,7,11],millisecond:10,millivolt:[4,5,6],min_break_length_m:[2,10],min_decreas:11,mini:6,minimalist:6,minimum:[10,11],misclass:[1,3,11],misclassif:11,misclassmonitor:[1,2,3,5,11],mkdir_p:8,mne:[0,1,2,3,4,5,6,9,10,12],mne_appli:[1,2,3,12],mne_data:[],mne_ext:[1,2,3,8,16],mode:[4,6,7],model:[8,11,14,16],model_constraint:[1,2,3,5,11],model_loss_funct:11,modifi:[11,12,13],modul:[0,1,2,3,5,16],moment:11,monitor:[4,5,7,8,10,16],monitor_epoch:11,monitor_set:11,moodi:[4,5,6,7],more:[2,4,6,7,15],most:4,motor:[6,7],movement:[6,7],ms_to_sampl:10,much:2,multi:4,multipl:[1,3,8,10,16],multiplesetload:9,mywyrm:[],n_batch:10,n_break_start_offset:2,n_break_stop_offset:2,n_channel:[1,2,3],n_class:[1,2,3,4,5,6,7,13],n_filters_spat:13,n_filters_tim:13,n_first_set:10,n_iter:[7,15],n_preds_per_input:[1,2,4,5,7,10],n_preds_per_tri:11,n_receptive_field:2,n_sampl:10,n_time:[1,2,3],n_trial:10,name:[1,3,7,9,10,11],name_to_cod:[1,3,10],name_to_code_with_break:2,name_to_start_cod:[2,10],name_to_stop_cod:[1,2,3,10],name_to_stop_code_with_break:2,nan:10,ndarrai:[14,15],ndim:[],necess:5,necessari:[0,5,9,14],necessarili:10,need:[0,2,4,5],neg:[4,7],neo:6,net_in:[4,6,7],net_target:[4,6,7],network:[0,4,5,6,7,13,14,15],neural:[4,6,7,13,14,15],neurotechnolog:9,new_cnt:2,new_ev:2,new_f:12,new_set:[],newest:0,next:[7,10],nll_loss:[1,2,3,4,5,6,7],nodecreas:11,nois:15,none:[1,2,3,4,5,6,7,8,9,10,11,13,14],norm:14,note:[4,7,10,11,13],now:[0,2,4,5,7,11],np_to_var:[1,2,4,5,6,7,14],num_epoch:11,num_filters_2:13,num_filters_3:13,num_filters_4:13,number:[2,4,8,10,11,14,15],numpi:[0,1,2,3,4,5,6,7,14,15],object:[1,2,3,5,8,9,10,11,12,13,14],occur:4,off:[1,3],offset:[2,4,5,6,10],oi1h:9,oi2h:9,old:[],onc:6,one:[1,3,6,7,10,11],ones:[1,2,4,5,7],onli:[1,2,3,4,5,6,7,8,9,10,11,13],open:6,oper:8,opt:2,optim:[4,5,6,11],option:[9,10,11,14,15],order:[1,2,3,4,10],ordereddict:[1,2,3,10,11],org:0,origin:[4,5,6,7,13],orphan:[4,5,6],other:2,other_arg:8,other_kwarg:8,otherwis:[6,9],our:[4,6],out:[1,2,4,5,7,10],output:[4,5,6,7,10,11,13,14],over:5,overlap:[4,10,11],own:5,p10:9,packag:16,page:0,pair:8,panda:11,paper:[4,13],parallel:[1,2,3,4,5,7],paramet:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],part:[2,4,5,6,7,9],parts_test:[6,7],pass:[4,6,7,8,10,14],path:[4,5,6,7,8],pattern:[6,9],pch:[4,5,6,7],peng:[4,5,6,7],per:[1,2,3,4,5,6,7,10,11],perform:[1,2,6,10,11],perturb:[0,8,16],perturb_fn:15,phase:[],physiobank:[4,5,6,7],physiolog:[4,5,6,7],physionet:[4,5,6,7],physionet_path:[4,5,6,7],physionet_paths_test:[6,7],physiotoolkit:[4,5,6,7],pick:[2,4,5,6,7],pick_channel:2,pick_typ:[4,5,6,7],picks_test:[6,7],pip:0,place:[11,13],plane:9,pleas:0,plot:[8,9,16],plot_topomap:7,plt:7,po10:9,po1:9,po2:9,po3:9,po4:9,po5:9,po6:9,po7:9,po8:9,po9:9,point:[4,5,6,9,10],poo10h:9,poo3h:9,poo4h:9,poo9h:9,pool_mod:13,pool_nonlin:13,pool_time_length:13,pool_time_strid:[7,13],posit:[7,9],possibl:6,poz:9,ppo10h:9,ppo1:9,ppo2:9,ppo5h:9,ppo6h:9,ppo9h:9,preced:8,pred:[1,2,4,5,7],pred_fn:[7,15],predefin:[6,13],predict:[1,2,4,5,6,10,11,13,14,15],predicted_label:[4,6,7],preds_per_tri:[4,7,11],preload:[4,5,6,7],preprint:[13,14,15],preprocess:6,prevent:[5,11,14],print:[1,2,4,5,6,7,11],print_epoch:11,process:[1,2,3,4,5,7],progress:[5,11],proj:[4,5,6,7],project:9,properli:2,provid:[1,3,4,5],purpos:[4,5,6,7],push:15,put:4,pyplot:7,python:[0,5,14],pytorch:[0,4,5,6],random:[4,6,7,11,14,15],randomli:[4,6],randomst:[4,6,7,10,15],rang:[1,2,3,4,6,7],rate:[2,10,11,12],rather:10,raw:[0,1,3,4,5,6,7,9,10,12],raw_edf:9,raw_test:[6,7],rawarrai:[1,2,3,10,12],reach:[1,2,3,5,11],read:[6,7],read_raw_edf:[4,5,6,7],readi:[1,2,3],real:7,recent:[],recept:[1,2,3,4,5,7,10],receptive_field_m:2,receptive_field_s:2,record:[4,5,6,7,10,12],refer:[10,13,14,15],regex:9,regular:[10,11],reimplement:13,rel:11,relat:[4,5,6,7],reload:[],reload_ext:[],remaining_dims_a:8,remaining_dims_b:8,reman:5,rememb:11,remember_best:11,remember_best_column:[1,2,3,5,11],remember_epoch:11,rememberbest:11,remov:[1,2,3,4,5,6,7,10,11,13],report:[0,6],repres:10,requires_grad:14,resampi:12,resampl:[1,2,3,9,12],resample_cnt:[1,2,3,12],resampli:0,research:[0,4,5,6,7],reset:[5,11],reset_rng:10,reset_to_best_model:11,reshap:8,resourc:[4,5,6,7],respect:12,respons:7,rest:[1,3],restor:11,result:[1,7,8,10,11],result_set:10,rfftfreq:7,right:[1,2,3,6,7],rng:[4,6,7,10,15],robintibor:0,robot:2,robust:[],root:10,rotat:2,roughli:10,row:11,rtsutil:[],run:[6,7,9,10,11],run_after_early_stop:[1,2,3,5,11],run_one_epoch:11,run_until_early_stop:11,run_until_second_stop:11,run_until_stop:11,runtim:[1,2,3,5,11],runtimemonitor:[1,2,3,5,11],s001:[],s001r02:9,s001r04:[],s001r08:[],s001r12:[],s002:[],s002r04:[],s002r08:[],s002r12:[],s003:[],s003r04:[],s003r08:[],s003r12:[],s004:[],s004r04:[],s004r08:[],s004r12:[],s005:[],s005r04:[],s005r08:[],s005r12:[],s006:[],s006r04:[],s006r08:[],s006r12:[],s007:[],s007r04:[],s007r08:[],s007r12:[],s008:[],s008r04:[],s008r08:[],s008r12:[],s009:[],s009r04:[],s009r08:[],s009r12:[],s010:[],s010r04:[],s010r08:[],s010r12:[],s011:[],s011r04:[],s011r08:[],s011r12:[],s012:[],s012r04:[],s012r08:[],s012r12:[],s013:[],s013r04:[],s013r08:[],s013r12:[],s014:[],s014r04:[],s014r08:[],s014r12:[],s015:[],s015r04:[],s015r08:[],s015r12:[],s016:[],s016r04:[],s016r08:[],s016r12:[],s017:[],s017r04:[],s017r08:[],s017r12:[],s018:[],s018r04:[],s018r08:[],s018r12:[],s019:[],s019r04:[],s019r08:[],s019r12:[],s020:[],s020r04:[],s020r08:[],s020r12:[],s021:[],s021r04:[],s021r08:[],s021r12:[],s022:[],s022r04:[],s022r08:[],s022r12:[],s023:[],s023r04:[],s023r08:[],s023r12:[],s024:[],s024r04:[],s024r08:[],s024r12:[],s025:[],s025r04:[],s025r08:[],s025r12:[],s026:[],s026r04:[],s026r08:[],s026r12:[],s027:[],s027r04:[],s027r08:[],s027r12:[],s028:[],s028r04:[],s028r08:[],s028r12:[],s029:[],s029r04:[],s029r08:[],s029r12:[],s030:[],s030r04:[],s030r08:[],s030r12:[],s031:[],s031r04:[],s031r08:[],s031r12:[],s032:[],s032r04:[],s032r08:[],s032r12:[],s033:[],s033r04:[],s033r08:[],s033r12:[],s034:[],s034r04:[],s034r08:[],s034r12:[],s035:[],s035r04:[],s035r08:[],s035r12:[],s036:[],s036r04:[],s036r08:[],s036r12:[],s037:[],s037r04:[],s037r08:[],s037r12:[],s038:[],s038r04:[],s038r08:[],s038r12:[],s039:[],s039r04:[],s039r08:[],s039r12:[],s040:[],s040r04:[],s040r08:[],s040r12:[],s041:[],s041r04:[],s041r08:[],s041r12:[],s042:[],s042r04:[],s042r08:[],s042r12:[],s043:[],s043r04:[],s043r08:[],s043r12:[],s044:[],s044r04:[],s044r08:[],s044r12:[],s045:[],s045r04:[],s045r08:[],s045r12:[],s046:[],s046r04:[],s046r08:[],s046r12:[],s047:[],s047r04:[],s047r08:[],s047r12:[],s048:[],s048r04:[],s048r08:[],s048r12:[],s049:[],s049r04:[],s049r08:[],s049r12:[],s050:[],s050r04:[],s050r08:[],s050r12:[],s051:[],s051r04:[],s051r08:[],s051r12:[],s052:[],s052r04:[],s052r08:[],s052r12:[],s053:[],s053r04:[],s053r08:[],s053r12:[],s054:[],s054r04:[],s054r08:[],s054r12:[],s055:[],s055r04:[],s055r08:[],s055r12:[],safe_log:[13,14],sai:11,same:[2,6,10,15],sampl:[2,4,7,8,9,10,12],sample_misclass:[1,2,5],samples_to_m:10,save:9,scale:4,scalp:[7,9],schalk:[4,5,6,7],schirrmeist:[13,14,15],schirrmr:[1,2,3],scipi:10,search:[0,9],searchsort:7,sec:[1,2,3],second:[1,2,3,5,10],second_kernel_s:13,second_set:10,section:[4,7],see:[4,5,6,7,9,10,15],seed:[1,2,3,4,5,6,7,11,14,15],seen:1,segment_ival_m:[1,3],select_inverse_ind:8,sens:11,sensor:[1,2,3,9,15],sensor_nam:9,sensor_posit:[7,8,16],separ:10,sequence_or_el:8,sequenti:13,seri:4,set:[4,5,6,7,9,10,11,14],set_a:10,set_b:10,set_load:9,set_random_se:[1,2,3,4,5,6,7,14],set_titl:7,setnam:[4,6,7,11],setup:[0,7,11],setup_after_stop_train:11,setup_train:11,sfreq:[2,7],shallow:[6,8,13],shallow_fbcsp:[1,2,3,4,5,6,8,16],shallowfbcspnet:[1,2,3,4,5,6,13],shape:[1,2,3,4,5,6,7,15],shortest_ev:[4,5,6,7],should:[1,3,5,6,10,11,12,14,15],should_stop:11,show:[1,2,3,7],shuffl:[4,6,7,10],side:7,signal:[4,5,6,7,10],signal_target:[4,5,6,7,8,16],signalandtarget:[1,3,4,5,6,7,10,11],signalproc:[1,2,3,8,16],signaltarget:10,simpl:10,sinc:[1,2,3],singl:6,size:[1,2,3,4,5,7,10,15],slow:[6,7],smaller:[4,6,10],softmax:[4,7,14],solon:13,some:[1,2,3,4,5,6,7,9,10,13],someth:7,sourc:[8,9,10,11,12,13,14,15],spatial:6,specif:9,speed:9,split:[1,3,10],split_first_lay:13,split_into_two_set:[1,2,3,5,10],splitter:[1,2,3,5,8,16],springenberg:[13,14,15],squar:[13,14],stabil:10,stabl:10,stackoverflow:[8,10],standard:[2,10],stanlei:[4,5,6,7],star:3,start:[1,3,10],start_freq:7,stat:[],stat_fn:8,state:[5,11],statist:[4,6,7],std:[],stdout:[1,2,3,5,7],step:[4,6,7],stereograph:9,sti:[1,2,3,4,5,6,7],still:6,stim:[4,5,6,7],stim_channel:[4,5,6,7],stimulu:[1,2,3],stochast:6,stop:[5,10,11],stop_criteria:11,stop_criterion:[1,2,3,5,11],stop_freq:7,stopcriteria:[1,2,3,5,8,16],store:11,str:[9,10,11],stream:[1,2,3,5,7],stride:[4,13],strip:7,structur:[],sub_id:[6,7],subject:[6,7],subject_id:[4,5,6],submodul:16,subpackag:16,subplot:7,suitabl:9,sum:[8,14],suppli:[1,3,10],sure:9,sys:[1,2,3,5,7],system:[4,5,6,7],t10:9,take:[2,5,6,11],taken:11,tangermann:[13,14,15],target:[1,2,5,11,14],target_valu:11,task:6,tbme:[4,5,6,7],tempor:11,tensor:15,term:[8,13],test:[4,5,6,7,11],test_cnt:2,test_filenam:[1,3],test_i:[6,7],test_input:[1,2,4,5,7],test_loss:[1,2,3,5],test_misclass:[1,2,3,5],test_run:2,test_sample_misclass:[1,2,5],test_set:[1,2,3,4,5,6,7,11],test_x:[6,7],text:4,than:[1,2,3,4,10],thei:[4,5,6,7],them:[2,4,5,6,7,12],thi:[1,2,3,4,5,6,7,9,10,11,13],third_kernel_s:13,those:9,through:[4,6,15],time:[0,1,2,3,4,5,6,7,10,11,12],timestep:[1,3,4,6,7],tmax:[4,5,6,7],tmin:[4,5,6,7],to_dense_prediction_model:[1,2,4,5,7,13],to_tupl:8,togeth:[2,10],too:2,tool:0,toolbox:0,torch:[1,2,3,4,5,6,7,11,14],torch_ext:[1,2,3,4,5,6,7,8,16],torchvis:0,touch_fil:8,tp7:9,tp8:9,tpp10h:9,tpp7h:9,tpp8h:9,tpp9h:9,traceback:[],train:[1,2,3,5,10,11],train_batch:[7,11],train_cnt:2,train_filenam:[1,3],train_i:[6,7],train_loss:[1,2,3,5],train_misclass:[1,2,3,5],train_run:2,train_sample_misclass:[1,2,5],train_set:[1,2,3,4,5,6,7,11],train_x:[6,7],train_x_batch:7,trane:11,transform:[4,11,12,13,14],transformed_set:12,translat:9,transpos:[1,2,3],tri:9,trial:[1,2,3,4,5,6,7,10,11],trial_seg:[1,2,3,8,16],trialwis:[0,1,4,11],trigger:11,ttp7h:9,ttp8h:9,tutori:[1,2,3,4,6,7],twice:[5,11],two:[1,3,6,8,10],type:[8,9,10,11,12,14,15],under:[],uniform:14,until:[1,2,3,5,10,11,14],updat:[6,11],use:[1,2,3,4,5,6,7,11],used:[2,4,5,6,7,10],useful:[6,11],uses:[1,3,4],using:[4,5,6,7,11,12,14],util:[1,2,3,4,5,6,7,16],valid:[1,3,5,11],valid_loss:[1,2,3,5],valid_misclass:[1,2,3,5],valid_sample_misclass:[1,2,5],valid_set:[1,2,3,5,11],valu:[8,10,11],var_kwarg:14,var_to_np:[4,6,7,14],variabl:[11,14],varianc:10,vector:6,verbos:[4,5,6,12],veri:[1,3,6,7],version:[0,9],via:0,visual:[0,4,6,8,13,14,16],visualis:15,viz:7,vmax:7,vmin:7,volt:[4,5,6],wai:6,wait:11,want:[0,1,2,3,4,5,6,7,8,9],warn:[1,2,3,4,5,6,12],waytowich:13,weight:14,well:[4,5,6,7],were:[2,11],when:[5,11,15],whether:[10,11,12,14],which:[1,3,4,5,6,7,11],wiki:[],wikipedia:[],window:4,within:[4,7,8],without:[1,3,8,11],wolpaw:[4,5,6,7],word:2,work:[0,4,14],would:[2,6,10],wrap:7,wrap_reshape_apply_fn:8,write:5,wyrm:[],xavier:14,xtick:[],yet:[4,5,6],you:[0,1,2,3,4,5,6,7,8,9],your:[1,2,3,4,5,6,7],zero:[10,14],zero_grad:[4,6,7],zip:7},titles:["Welcome to Braindecode","Read and Decode BBCI Data","Read and Decode BBCI Data with Start-Stop-Markers","Read and Decode BBCI Data","Cropped Decoding","Using the Experiment Class","Trialwise Decoding","Amplitude Perturbation Visualization","braindecode package","braindecode.datasets package","braindecode.datautil package","braindecode.experiments package","braindecode.mne_ext package","braindecode.models package","braindecode.torch_ext package","braindecode.visualization package","braindecode"],titleterms:{"class":5,"function":[1,2,3,14],Using:5,amplitud:7,api:0,bbci:[1,2,3,9],bcic_iv_2a:9,braindecod:[0,4,5,6,7,8,9,10,11,12,13,14,15,16],chang:7,comput:7,constraint:14,contin:[1,3],convert:[4,5,6],correl:7,creat:[1,2,3,4,5,6,7],criteria:[1,2,3],crop:4,data:[1,2,3,4,5,6,7],dataset:[1,3,4,5,6,7,9],datautil:10,decod:[1,2,3,4,6],deep4:13,eegnet:13,epoch:[1,3],experi:[1,2,3,5,11],format:[4,5,6],indic:0,init:14,instal:0,iter:[1,2,3,4,7,10],load:[1,2,3,4,5,6,7],log:[1,2,3],loop:[4,6,7],loss:[1,2,3,14],marker:2,mne:7,mne_ext:12,model:[1,2,3,4,5,6,7,13],modul:[8,9,10,11,12,13,14,15],monitor:[1,2,3,11],multipl:9,optim:[1,2,3,7],output:[1,2,3],packag:[8,9,10,11,12,13,14,15],perturb:[7,15],plot:[7,15],predict:7,preprocess:[1,2,3],read:[1,2,3],refer:[4,5,6,7],run:[1,2,3,5],same:[1,3],see:[1,2,3],sensor_posit:9,set:[1,2,3],setup:[1,2,3,5],shallow_fbcsp:13,signal_target:10,signalandtarget:2,signalproc:[10,12],splitter:10,start:2,stop:[1,2,3],stopcriteria:11,submodul:[8,9,10,11,12,13,14,15],subpackag:8,tabl:0,test:[1,3],torch_ext:14,train:[4,6,7],transform:[1,3],trial_seg:10,trialwis:6,troubleshoot:0,tutori:0,util:[8,10,13,14],visual:[7,15],welcom:0}})