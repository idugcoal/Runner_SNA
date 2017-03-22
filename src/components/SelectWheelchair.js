import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { CardSection, Button } from './common';

class SelectWheelchair extends Component {

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.buttons}>  
          <View style={styles.row}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>10</Button>
          </View>
          <View style={styles.row}>
            <Button>11</Button>
            <Button>12</Button>
            <Button>13</Button>
            <Button>14</Button>
            <Button>15</Button>
            <Button>16</Button>
            <Button>17</Button>
            <Button>18</Button>
            <Button>19</Button>
            <Button>20</Button>
          </View>
            <View style={styles.row}>
            <Button>21</Button>
            <Button>22</Button>
            <Button>23</Button>
            <Button>24</Button>
            <Button>25</Button>
            <Button>26</Button>
            <Button>27</Button>
            <Button>28</Button>
            <Button>29</Button>
            <Button>30</Button>
          </View>  
            <View style={styles.row}>
            <Button>31</Button>
            <Button>32</Button>
            <Button>33</Button>
            <Button>34</Button>
            <Button>35</Button>
            <Button>36</Button>
            <Button>37</Button>
            <Button>38</Button>
            <Button>39</Button>
            <Button>40</Button>
          </View>  
            <View style={styles.row}>
            <Button>41</Button>
            <Button>42</Button>
            <Button>43</Button>
            <Button>44</Button>
            <Button>45</Button>
            <Button>46</Button>
            <Button>47</Button>
            <Button>48</Button>
            <Button>49</Button>
            <Button>50</Button>
          </View>  
            <View style={styles.row}>
            <Button>51</Button>
            <Button>52</Button>
            <Button>53</Button>
            <Button>54</Button>
            <Button>55</Button>
            <Button>56</Button>
            <Button>57</Button>
            <Button>58</Button>
            <Button>59</Button>
            <Button>60</Button>
          </View>  
            <View style={styles.row}>
            <Button>61</Button>
            <Button>62</Button>
            <Button>63</Button>
            <Button>64</Button>
            <Button>65</Button>
            <Button>66</Button>
            <Button>67</Button>
            <Button>68</Button>
            <Button>69</Button>
            <Button>70</Button>
          </View> 
            <View style={styles.row}>
            <Button>71</Button>
            <Button>72</Button>
            <Button>73</Button>
            <Button>74</Button>
            <Button>75</Button>
            <Button>76</Button>
            <Button>77</Button>
            <Button>78</Button>
            <Button>79</Button>
            <Button>80</Button>
          </View>  
            <View style={styles.row}>
            <Button>81</Button>
            <Button>82</Button>
            <Button>83</Button>
            <Button>84</Button>
            <Button>85</Button>
            <Button>86</Button>
            <Button>87</Button>
            <Button>88</Button>
            <Button>89</Button>
            <Button>90</Button>
          </View>  
            <View style={styles.row}>
            <Button>91</Button>
            <Button>92</Button>
            <Button>93</Button>
            <Button>94</Button>
            <Button>95</Button>
            <Button>96</Button>
            <Button>97</Button>
            <Button>98</Button>
            <Button>99</Button>
            <Button>100</Button>
          </View>  
        </View>
        <View style={styles.footer}>
          <Text>{"Customer Name: "}</Text>
          <Text>{"Destination Gate #: "}</Text>
          <Text>{"Wheelchair #: "}</Text>
        </View>
      </View>
    );
  };
};

const styles = {
  buttons: {
    flex: 8
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 3
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  }
};

export default SelectWheelchair;